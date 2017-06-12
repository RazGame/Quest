var Game = require('mongoose').model('Game');
var GameAppl = require('mongoose').model('GameAppl');

exports.getGames = function (req, res) {
  Game.find({}).exec(function (err, collection) {
    res.send(collection);
  });
};

exports.getGameByGameId = function (req, res) {
  Game.findOne({_id: req.params.id}).exec(function (err, game) {
    res.send(game);
  });
};

exports.getGameApplsByGameeId = function (req, res) {
  GameAppl.find({gameParent: req.params.id})
    .exec(function (err, gameAndAppl) {
      if (err) {
      }
      console.log(JSON.stringify(gameAndAppl));
      res.send(gameAndAppl);
    });
};

exports.createGame = function (req, res, next) {
  var gameData = req.body;
  Game.create(gameData, function (err, game) {
    if (err) {
      res.status(400); // bad req
      return res.send({reason: err.toString()});
    }
    res.send(game);
  });
};

exports.updateGame = function(req, res) {
    var gameUpdates = req.body;
    req.game.title = gameUpdates.title;
    req.game.description = gameUpdates.description;

    req.game.save(function(err) {
        if(err) { res.status(400); return res.send({reason:err.toString()});}
        res.send(req.game);
    });
};

exports.deleteGame = function (req, res, next) {
  // todo
};


