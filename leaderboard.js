PlayersList = new Mongo.Collection('players');

if(Meteor.isClient){
  Template.leaderboard.helpers({
    'player': function(){
       return "Some other text"
    },
    'otherHelperFunction': function(){
       return "Some other function"
    }
  });
}

if(Meteor.isServer){
}
