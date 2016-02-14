'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _utilsUtils = require('../utils/utils');

var _utilsUtils2 = _interopRequireDefault(_utilsUtils);

var _utilsKnown_paths = require('../utils/known_paths');

var _utilsKnown_paths2 = _interopRequireDefault(_utilsKnown_paths);

var Angular1 = (function () {
  function Angular1(gen) {
    _classCallCheck(this, Angular1);

    this.generator = gen;
  }

  _createClass(Angular1, [{
    key: 'copyClient',
    value: function copyClient() {
      this.generator.directory('tasks/client_ng1', 'tasks/client');
      this.generator.directory('tests/client_ng1', 'tests/client');
      this.generator.directory('client_ng1', 'client');
    }
  }, {
    key: 'copyDirective',
    value: function copyDirective() {
      this.generator.template('ng1/directive.js', _utilsKnown_paths2['default'].PATH_CLIENT_FEATURES + this.generator.options.feature + '/directives/' + this.generator.name + '.directive.js', { name: this.generator.name });
      this.generator.template('ng1/directive_test.js', _utilsKnown_paths2['default'].PATH_CLIENT_FEATURES_TEST + this.generator.options.feature + '/directives/' + this.generator.name + '.directive_test.js', { name: this.generator.name });
    }
  }, {
    key: 'copyFactory',
    value: function copyFactory() {
      this.generator.template('ng1/factory.js', _utilsKnown_paths2['default'].PATH_CLIENT_FEATURES + this.generator.options.feature + '/factory/' + this.generator.name + '.factory.js', { name: _utilsUtils2['default'].capitalizeFirst(this.generator.name) });
      this.generator.template('ng1/factory_test.js', _utilsKnown_paths2['default'].PATH_CLIENT_FEATURES_TEST + this.generator.options.feature + '/factory/' + this.generator.name + '.factory_test.js', { name: _utilsUtils2['default'].capitalizeFirst(this.generator.name) });
    }
  }, {
    key: 'copyService',
    value: function copyService() {
      this.generator.template('ng1/service.js', _utilsKnown_paths2['default'].PATH_CLIENT_FEATURES + this.generator.options.feature + '/services/' + this.generator.name + '.service.js', { name: this.generator.name });
      this.generator.template('ng1/service_test.js', _utilsKnown_paths2['default'].PATH_CLIENT_FEATURES_TEST + this.generator.options.feature + '/services/' + this.generator.name + '.service_test.js', { name: this.generator.name });
    }
  }]);

  return Angular1;
})();

exports.Angular1 = Angular1;

var Angular2 = (function () {
  function Angular2(gen) {
    _classCallCheck(this, Angular2);

    this.generator = gen;
  }

  _createClass(Angular2, [{
    key: 'copyClient',
    value: function copyClient() {
      this.generator.directory('tasks/client_ng2', 'tasks/client');
      this.generator.directory('tests/client_ng2', 'tests/client');
      this.generator.directory('client_ng2', 'client');
      this.generator.template('_karma.conf_ng2.js', 'karma.conf.js');
      this.generator.template('_karma-test-shim.js', 'karma-test-shim.js');
      this.generator.template('_typings_ng2.json', 'typings.json');
    }
  }, {
    key: 'copyDirective',
    value: function copyDirective() {
      this.generator.template('ng2/directive.ts', _utilsKnown_paths2['default'].PATH_CLIENT_FEATURES + this.generator.options.feature + '/' + this.generator.name + '_directive.ts', { name: this.generator.name });
      this.generator.template('ng2/directive_test.ts', _utilsKnown_paths2['default'].PATH_CLIENT_FEATURES_TEST + this.generator.options.feature + '/' + this.generator.name + '_directive_test.ts', { name: this.generator.name });
    }
  }, {
    key: 'copyFactory',
    value: function copyFactory() {
      this.generator.template('ng2/factory.ts', _utilsKnown_paths2['default'].PATH_CLIENT_FEATURES + this.generator.options.feature + '/' + this.generator.name + '_factory.ts', { name: _utilsUtils2['default'].capitalizeFirst(this.generator.name) });
      this.generator.template('ng2/factory_test.ts', _utilsKnown_paths2['default'].PATH_CLIENT_FEATURES_TEST + this.generator.options.feature + '/' + this.generator.name + '_factory_test.ts', { name: _utilsUtils2['default'].capitalizeFirst(this.generator.name) });
    }
  }, {
    key: 'copyService',
    value: function copyService() {
      this.generator.template('ng2/service.ts', _utilsKnown_paths2['default'].PATH_CLIENT_FEATURES + this.generator.options.feature + '/' + this.generator.name + '_service.ts', { name: this.generator.name });
      this.generator.template('ng2/service_test.ts', _utilsKnown_paths2['default'].PATH_CLIENT_FEATURES_TEST + this.generator.options.feature + '/' + this.generator.name + '_service_test.ts', { name: this.generator.name });
    }
  }]);

  return Angular2;
})();

exports.Angular2 = Angular2;

var AngularFactory = (function () {
  function AngularFactory() {
    _classCallCheck(this, AngularFactory);
  }

  _createClass(AngularFactory, null, [{
    key: 'build',
    value: function build(token, gen) {
      switch (token) {
        case AngularFactory.tokens.NG1:
          return new Angular1(gen);
        case AngularFactory.tokens.NG2:
          return new Angular2(gen);
        default:
          throw new Error('Invalid Angular token: ' + token + '.');
      }
    }
  }, {
    key: 'tokens',
    value: {
      NG1: 'ng1',
      NG2: 'ng2'
    },
    enumerable: true
  }]);

  return AngularFactory;
})();

exports.AngularFactory = AngularFactory;