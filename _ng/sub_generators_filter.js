'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _known_paths = require('./known_paths');

var _known_paths2 = _interopRequireDefault(_known_paths);

var _options_parser = require('./options_parser');

var _options_parser2 = _interopRequireDefault(_options_parser);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var FilterSubGenerator = (function () {
  function FilterSubGenerator(generator) {
    _classCallCheck(this, FilterSubGenerator);

    this.wrapper = generator;
  }

  _createClass(FilterSubGenerator, [{
    key: 'initializing',
    value: function initializing() {
      this.wrapper.argument('name', {
        required: true,
        type: String,
        desc: 'filter'
      });
    }
  }, {
    key: 'writing',
    value: function writing() {
      var _feature = _options_parser2['default'].getFeature(this.wrapper.options);
      var _name = this.wrapper.name;

      if (!_feature.length) throw new Error('Feature is needed. Do it like this: --feature something-here');

      this.wrapper.template('filter.js', _known_paths2['default'].PATH_CLIENT_FEATURES + _feature + '/filters/' + _name + '.filter.js', { name: _name });
      this.wrapper.template('filter_test.js', _known_paths2['default'].PATH_CLIENT_FEATURES_TEST + _feature + '/filters/' + _name + '.filter_test.js', { name: _name });
    }
  }]);

  return FilterSubGenerator;
})();

exports.FilterSubGenerator = FilterSubGenerator;