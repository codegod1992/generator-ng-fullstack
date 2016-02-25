"use strict";

const utils = require('../utils/utils');
const knownPaths = require('../utils/known_paths');

class Angular1 {
  constructor(gen) {
    this.generator = gen;
  }

  copyClient() {
    this.generator.directory('tasks/client_ng1', 'tasks/client');
    this.generator.directory('tests/client_ng1', 'tests/client');
    this.generator.directory('client_ng1', 'client');
  }

  copyController(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'controller_client.js', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/controllers/${this.generator.name}.js`, {name: this.generator.name});
    this.generator.template(_pathTemplate + 'controller_client_test.js', `${knownPaths.PATH_CLIENT_FEATURES_TEST + this.generator.options.feature}/controllers/${this.generator.name}_test.js`, {name: this.generator.name, nameLowerCase: this.generator.name.toLowerCase()});
  }

  copyDirective(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'ng1/directive.js', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/directives/${this.generator.name}.js`, {name: this.generator.name});
    this.generator.template('ng1/directive_test.js', `${knownPaths.PATH_CLIENT_FEATURES_TEST + this.generator.options.feature}/directives/${this.generator.name}_test.js`, {name: this.generator.name});
  }

  copyFactory(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'ng1/factory.js', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/factory/${this.generator.name}.js`, {name: utils.capitalizeFirst(this.generator.name)});
    this.generator.template(_pathTemplate + 'ng1/factory_test.js', `${knownPaths.PATH_CLIENT_FEATURES_TEST + this.generator.options.feature}/factory/${this.generator.name}_test.js`, {name: utils.capitalizeFirst(this.generator.name)});
  }

  copyService(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'ng1/service.js', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/services/${this.generator.name}.js`, {name: this.generator.name});
    this.generator.template(_pathTemplate + 'ng1/service_test.js', `${knownPaths.PATH_CLIENT_FEATURES_TEST + this.generator.options.feature}/services/${this.generator.name}_test.js`, {name: this.generator.name});
  }

  copyModel(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'ng1/model.js', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/models/${this.generator.name}.js`, {name: this.generator.name});
    this.generator.template(_pathTemplate + 'ng1/model_test.js', `${knownPaths.PATH_CLIENT_FEATURES_TEST + this.generator.options.feature}/models/${this.generator.name}_test.js`, {name: this.generator.name});
  }

  copyDecorator(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'decorator.js', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/decorator/${this.generator.name}.js`);
  }

  copyFilter(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'filter.js', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/filters/${this.generator.name}.js`, {name: this.generator.name});
    this.generator.template(_pathTemplate + 'filter_test.js', `${knownPaths.PATH_CLIENT_FEATURES_TEST + this.generator.options.feature}/filters/${this.generator.name}_test.js`, {name: this.generator.name});
  }

  copyTemplate(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'view.html', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/templates/${this.generator.name}.html`, {name: this.generator.name});
  }

  copyStyle(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'style.css', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/styles/${this.generator.name}.css`);
  }

  copyModule() {
      this.copyController('../../controller/templates/');
      this.copyFactory('../../factory/templates/');
      this.copyService('../../service/templates/');
      this.copyModel('../../model/templates/');
      this.copyStyle('../../style/templates/');
      this.copyTemplate('../../view/templates/');
  }
}

class Angular2 {
  constructor(gen) {
    this.generator = gen;
  }

  copyClient() {
    this.generator.directory('tasks/client_ng2', 'tasks/client');
    this.generator.directory('tests/client_ng2', 'tests/client');
    this.generator.directory('client_ng2', 'client');
    this.generator.template('_karma.conf_ng2.js', 'karma.conf.js');
    this.generator.template('_karma-test-shim.js', 'karma-test-shim.js');
    this.generator.template('_typings_ng2.json', 'typings.json');
    this.generator.template('_tsconfig.json', 'tsconfig.json');
  }

  copyComponent(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'component.ts', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/components/${this.generator.name}.ts`, {name: this.generator.name.charAt(0).toUpperCase() + this.generator.name.slice(1)});
    this.generator.template(_pathTemplate + 'component.html', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/components/${this.generator.name}.html`, {name: this.generator.name});
    this.generator.template(_pathTemplate + 'component.css', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/components/${this.generator.name}.css`);
    this.generator.template(_pathTemplate + 'component_test.ts', `${knownPaths.PATH_CLIENT_FEATURES_TEST + this.generator.options.feature}/components/${this.generator.name}_test.ts`, {name: this.generator.name.charAt(0).toUpperCase() + this.generator.name.slice(1), nameLowerCase: this.generator.name.toLowerCase()});
  }

  copyDirective(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'ng2/directive.ts', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/directives/${this.generator.name}.ts`, {name: this.generator.name});
    this.generator.template(_pathTemplate + 'ng2/directive_test.ts', `${knownPaths.PATH_CLIENT_FEATURES_TEST + this.generator.options.feature}/directives/${this.generator.name}_test.ts`, {name: this.generator.name});
  }

  copyFactory(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'ng2/factory.ts', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/factory/${this.generator.name}.ts`, {name: utils.capitalizeFirst(this.generator.name)});
    this.generator.template(_pathTemplate + 'ng2/factory_test.ts', `${knownPaths.PATH_CLIENT_FEATURES_TEST + this.generator.options.feature}/factory/${this.generator.name}_test.ts`, {name: utils.capitalizeFirst(this.generator.name)});
  }

  copyService(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'ng2/service.ts', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/services/${this.generator.name}.ts`, {name: this.generator.name});
    this.generator.template(_pathTemplate + 'ng2/service_test.ts', `${knownPaths.PATH_CLIENT_FEATURES_TEST + this.generator.options.feature}/services/${this.generator.name}_test.ts`, {name: this.generator.name});
  }

  copyModel(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'ng2/model.ts', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/models/${this.generator.name}.ts`, {name: this.generator.name});
    this.generator.template(_pathTemplate + 'ng2/model_test.ts', `${knownPaths.PATH_CLIENT_FEATURES_TEST + this.generator.options.feature}/models/${this.generator.name}_test.ts`, {name: this.generator.name});
  }

  copyPipe(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'pipe.ts', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/pipes/${this.generator.name}.ts`, {name: this.generator.name});
    this.generator.template(_pathTemplate + 'pipe_test.js', `${knownPaths.PATH_CLIENT_FEATURES_TEST + this.generator.options.feature}/pipes/${this.generator.name}_test.js`, {name: this.generator.name});
  }

  copyTemplate(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'view.html', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/templates/${this.generator.name}.html`, {name: this.generator.name});
  }

  copyStyle(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'style.css', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/styles/${this.generator.name}.css`);
  }

  copyModule() {
      this.copyComponent('../../component/templates/');
      this.copyFactory('../../factory/templates/');
      this.copyService('../../service/templates/');
      this.copyModel('../../model/templates/');
      this.copyStyle('../../style/templates/');
      this.copyTemplate('../../view/templates/');
  }
}

class AngularFactory {
  static tokens() {
    return {
      NG1: 'ng1',
      NG2: 'ng2'
    }
  }

  static build(token, gen) {
    switch(token) {
      case AngularFactory.tokens().NG1: return new Angular1(gen);
      case AngularFactory.tokens().NG2: return new Angular2(gen);
      default: throw new Error(`Invalid Angular token: ${token}.`);
    }
  }
}

exports.Angular1 = Angular1;
exports.Angular2 = Angular2;
exports.AngularFactory = AngularFactory;
