Template.addPlayerForm.events({
  'submit form': function(event){
    event.preventDefault();
    var playerNameVar = event.target.playerName.value;
    var playerScoreVar = event.target.playerScore.value;
    Meteor.call("insertPlayerData", playerNameVar, playerScoreVar);
    event.target.playerName.value = "";
    event.target.playerScore.value = "";
    return false;
  }
});

