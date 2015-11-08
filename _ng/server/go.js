'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

var _utilsKnown_paths = require('../utils/known_paths');

var _utilsKnown_paths2 = _interopRequireDefault(_utilsKnown_paths);

var basePath = function basePath(generator) {
  return {
    route: _utilsKnown_paths2['default'].PATH_SERVER_FEATURES + generator.feature + '/routes/' + generator.name + 'route',
    controller: _utilsKnown_paths2['default'].PATH_SERVER_FEATURES + generator.feature + '/controller/' + generator.name + 'controller',
    dao: _utilsKnown_paths2['default'].PATH_SERVER_FEATURES + generator.feature + '/dao/' + generator.name + 'dao',
    model: _utilsKnown_paths2['default'].PATH_SERVER_FEATURES + generator.feature + '/model/' + generator.name + 'model',
    daoTest: _utilsKnown_paths2['default'].PATH_SERVER_FEATURES + generator.feature + '/dao/' + generator.name + 'dao_test',
    modelTest: _utilsKnown_paths2['default'].PATH_SERVER_FEATURES + generator.feature + '/model/' + generator.name + 'model_test',
    controllerTest: _utilsKnown_paths2['default'].PATH_SERVER_FEATURES + generator.feature + '/controller/' + generator.name + 'controller_test',
    routeTest: _utilsKnown_paths2['default'].PATH_SERVER_FEATURES + generator.feature + '/routes/' + generator.name + 'route_test'
  };
};

var GoServer = (function () {
  function GoServer(generator) {
    _classCallCheck(this, GoServer);

    this.wrapper = generator;
  }

  _createClass(GoServer, [{
    key: 'copyFiles',
    value: function copyFiles() {
      var _featureWithoutTrailingSlash = this.wrapper.feature.replace('/', '');
      var gen = basePath(this.wrapper);

      this.wrapper.template('go/endpoint.route.go', gen.route + '.go', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), username: this.wrapper.username, appName: this.wrapper.appName, feature: _featureWithoutTrailingSlash });
      this.wrapper.template('go/endpoint.controller.go', gen.controller + '.go', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), username: this.wrapper.username, appName: this.wrapper.appName, feature: _featureWithoutTrailingSlash });
      this.wrapper.template('go/endpoint.dao.go', gen.dao + '.go', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), username: this.wrapper.username, appName: this.wrapper.appName, feature: _featureWithoutTrailingSlash });
      this.wrapper.template('go/endpoint.model.go', gen.model + '.go', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), username: this.wrapper.username, appName: this.wrapper.appName, feature: _featureWithoutTrailingSlash });

      this.wrapper.template('go/endpoint.dao_test.go', gen.daoTest + '.go', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), feature: _featureWithoutTrailingSlash, username: this.wrapper.username, appName: this.wrapper.appName });
      this.wrapper.template('go/endpoint.model_test.go', gen.modelTest + '.go', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), feature: _featureWithoutTrailingSlash, username: this.wrapper.username, appName: this.wrapper.appName });
      this.wrapper.template('go/endpoint.controller_test.go', gen.controllerTest + '.go', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), feature: _featureWithoutTrailingSlash, username: this.wrapper.username, appName: this.wrapper.appName });
      this.wrapper.template('go/endpoint.route_test.go', gen.routeTest + '.go', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), feature: _featureWithoutTrailingSlash, username: this.wrapper.username, appName: this.wrapper.appName });
    }
  }, {
    key: 'copyForMainGenerator',
    value: function copyForMainGenerator() {
      this.wrapper.directory('server_go', 'server');
      this.wrapper.template('server_go/main.go', 'server/main.go', { appName: this.wrapper.appName, username: this.wrapper.username });
      this.wrapper.template('server_go/routes/routes.go', 'server/routes/routes.go', { appName: this.wrapper.appName, username: this.wrapper.username });
    }
  }]);

  return GoServer;
})();

exports.GoServer = GoServer;

var GoFactory = (function () {
  function GoFactory() {
    _classCallCheck(this, GoFactory);
  }

  _createClass(GoFactory, null, [{
    key: 'build',
    value: function build(generator) {
      return new GoServer(generator);
    }
  }]);

  return GoFactory;
})();

exports.GoFactory = GoFactory;