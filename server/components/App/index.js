let config;

class App {
  static Config() {
    if (!config) config = require('./../Config');
    return config;
  }

  static launch() {
    return require('./servers');
  }
}

module.exports = App;
