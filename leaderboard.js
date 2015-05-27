PlayersList = new Mongo.Collection('players');

if(Meteor.isClient){
  Template.leaderboard.helpers({
    'player': function(){
      return PlayersList.find({}, {sort: {score: -1, name: 1}})
    },
    'selectedClass': function(){
      var playerId = this._id;
      var selectedPlayer = Session.get('selectedPlayer');
      if(playerId == selectedPlayer){
        return "selected"
      }
    },
    'showSelectedPlayer': function() {
      var selectedPlayer = Session.get('selectedPlayer');
      return PlayersList.findOne(selectedPlayer)
    }
  });

  Template.leaderboard.events({
    // get the player's unique id
    'click .player': function(){
      var playerId = this._id;
      // store the id in selectedPlayer
      Session.set('selectedPlayer', playerId);
    },
    'click .increment': function(){
      var selectedPlayer = Session.get('selectedPlayer');
      PlayersList.update(selectedPlayer, {$inc: {score: 5}});
    },
    'click .decrement': function(){
      var selectedPlayer = Session.get('selectedPlayer');
      PlayersList.update(selectedPlayer, {$inc: {score: -5}});
    },
    'click .remove': function(e) {
      e.preventDefault();

      if (confirm("Delete this player?")) {
        var selectedPlayer = Session.get('selectedPlayer');
        PlayersList.remove(selectedPlayer);
      }
    }
  });

  Template.addPlayerForm.events({
    'submit form': function(event){
      event.preventDefault();
      var playerNameVar = event.target.playerName.value;
      var playerScoreVar = event.target.playerScore.value;

      PlayersList.insert({
        name: playerNameVar,
        score: playerScoreVar
      });
      event.target.playerName.value = "";
      event.target.playerScore.value = "";
      return false;
    }
  });
}

if(Meteor.isServer){
}
