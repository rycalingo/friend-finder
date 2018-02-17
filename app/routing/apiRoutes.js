
let friendsData = require('../data/friends');

const matchFriend = function(friendsList, newPerson) {
  let bestScore = 40;
  let bestMatch;

  for (const friend of friendsList) {
   
    let score = friend.scores.reduce( (sum, numScore, i) => sum + Math.abs(numScore - newPerson.scores[i]) );
    // console.log(score);
    if ( score <= bestScore ) {
      bestScore = score;
      bestMatch = friend;
    }
  };

  return bestMatch;
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
    friendsData.push(newFriend);

    let match = matchFriend(friendsData, newFriend);
    console.log(match);

    res.json(match);
  });



};