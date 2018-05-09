'use strict';

const optionsParser = require('../utils/options_parser');
const {FeatureMissingError} = require('../utils/errors');
const {AngularFactory} = require('./angular');
const {AureliaFactory} = require('./aurelia');
const {VueFactory} = require('./vue');

exports.DirectiveSubGenerator = class DirectiveSubGenerator {
  constructor(generator) {
    this.generator = generator;
    this.generator.client = this.generator.config.get('client');
    this.generator.appName = this.generator.config.get('appName');
    this.generator.testsSeparated = this.generator.config.get('testsSeparated');
  }

  initializing() {
    this.generator.argument('name', {
      required: true,
      type: String,
      desc: 'directive'
    });
  }

  writing() {
    let _feature = optionsParser.getFeature(this.generator.options);
    let _client = this.generator.client;

    if (!_feature.length) {
      throw new FeatureMissingError();
    }

    if ((_client === AngularFactory.tokens().NG1) || (_client === AngularFactory.tokens().NG2)) {
      return AngularFactory.build(this.generator.client, this.generator).copyDirective();
    }

    if (_client === VueFactory.tokens().VUE2) {
      return VueFactory.build(this.generator.client, this.generator).copyDirective();
    }

    if (_client === AureliaFactory.tokens().AURELIA1) {
      return AureliaFactory.build(_client, this.generator).copyDirective();
    }
  }
};
