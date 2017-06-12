var auth = require('./auth'),
  users = require('../controllers/users'),
  games = require('../controllers/game'),
  gameAppls = require('../controllers/gameAppls'),
  mongoose = require('mongoose'),
  User = mongoose.model('User');

module.exports = function(app) {
  // users
  app.get('/api/users', auth.requiresRole('admin'), users.getUsers);
  app.post('/api/users', users.createUser);
  app.put('/api/users', users.updateUser);

  // games
  app.get('/api/games', games.getGames);
  app.get('/api/games/:id', games.getGameByGameId);
  app.post('/api/games', games.createGame);
  app.put('/api/games/:id', games.updateGame);
  app.delete('/api/games/:id', games.deleteGame);


  // games application
  app.get('/api/game-appls', gameAppls.getGameAppls);
  app.get('/api/game-appls/:id', gameAppls.getGameApplById);
  app.post('/api/game-appls', gameAppls.createGameAppl);
  app.get('/api/game/:id/game-appls', games.getGameByGameId);
  app.get('/api/games/:gameId/game-appls', gameAppls.getGameApplById);

  app.get('/partials/*', function(req, res) {
    res.render('../../public/app/' + req.params);
  });

  app.post('/login', auth.authenticate);

  app.post('/logout', function(req, res) {
    req.logout();
    res.end();
  });

  app.all('/api/*', function(req, res) {
    res.send(404);
  });

  app.get('*', function(req, res) {
    res.render('index', {
      bootstrappedUser: req.user
    });
  });
};