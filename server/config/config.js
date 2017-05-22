var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
      db: "mongodb://admin:admin@ds029436.mlab.com:29436/questix",
      rootPath: rootPath,
      port: process.env.PORT || 3050
  },
  production: {
      rootPath: rootPath,
      db: "mongodb://admin:admin@ds029436.mlab.com:29436/questix",
      port: process.env.PORT || 80
  }
};