
let friendsData = require('../data/friends');

const matchFriend = function(friendsList, newPerson) {
  let prev = 40;
  let best_match;

  for (const [i, friend] of friendsList.entries()) {
   
    let score = friend.scores.reduce( (sum, friend_score) => sum + Math.abs(friend_score - newPerson.scores[i]) );
    console.log(score);
    if ( score <= prev ) {
      prev = score;
      best_match = friend;
    }
  };

  return best_match;
}
module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    let newFriend = {
      name: req.body.name,
      photo: req.body.photo,
      scores: req.body["scores[]"]
    }

    match = matchFriend(friendsData, newFriend);

    console.log(match);
    // friendsData.push(req.body);

    res.json(match);
  });



};