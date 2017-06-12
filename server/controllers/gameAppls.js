var GameAppl = require('mongoose').model('GameAppl');
var User = require('mongoose').model('User');

// get all gameAppls and game parent
exports.getGameAppls = function (req, res) {
  GameAppl.find({})
    .populate("gameParent")
	.populate("userParent")
    .exec(function (err, gameAppls) {
    res.send(gameAppls);
  });
};

exports.createGameAppl = function (req, res, next) {
  var gameAppl = new GameAppl(req.body);
  gameAppl.save(function (err, gameAppl) {
    if (err) {
      res.status = 400; // bad req
      return res.send({reason: err.toString()});
    }
    res.send(gameAppl);
  });
}

// get gameAppl with game and user parents by gameApplId
exports.getGameApplById = function (req, res, next) {
  GameAppl.findOne({_id: req.params.id})
    .populate("gameParent")
    .populate("userParent")
    .exec(function (err, gameAppl) {
      if (err) {
      }
      console.log(JSON.stringify(gameAppl));
      res.send(gameAppl);
    })
};
