PlayersList = new Mongo.Collection('players');

if(Meteor.isClient){
  Template.leaderboard.helpers({
    'player': function(){
       return PlayersList.find()
    },
  });

  Template.leaderboard.events({
    'click .player': function(){
      Session.set('selectedPlayer', 'session value test');
      Session.get('selectedPlayer');
    }
  });
}

if(Meteor.isServer){
}
