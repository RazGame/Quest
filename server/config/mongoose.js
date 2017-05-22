var mongoose = require('mongoose'),
    userModel = require('../models/User'),
    gameModel = require('../models/Game'),
    gameApplModel = require('../models/GameAppl');

module.exports = function(config) {
    mongoose.Promise = global.Promise;
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('Аааааа, подключились к БД');

    });

  userModel.createDefaultUsers();
  gameModel.createDefaultGames();
  gameApplModel.createDefaultGameAppls();
};
