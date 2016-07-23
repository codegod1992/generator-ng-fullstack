'use strict';

const utils = require('../utils/utils');
const knownPaths = require('../utils/known_paths');
const yoUtils = require('../utils/yeoman-utils');

class Vue2 {
  constructor(gen) {
    this.generator = gen;
    this.testsSeparated = gen && gen.testsSeparated !== undefined && typeof(gen.testsSeparated) === "boolean" ? gen.testsSeparated : true;
    this.testsPath = this.testsSeparated ? knownPaths.PATH_CLIENT_FEATURES_TEST : knownPaths.PATH_CLIENT_FEATURES;
  }

  copyClient() {
    this.generator.directory('tasks/client/vue2', 'tasks/client');
    this.generator.directory('client/vue2', 'client');
    this.generator.template('_karma.conf_vue2.js', 'karma.conf.js', {testsSeparated: this.testsSeparated});
    this.generator.template('_karma-test-shim.js', 'karma-test-shim.js');

    if(this.testsSeparated) {
      this.generator.directory('tests/client_vue2', 'tests/client');
    } else {
      let _pathTest = [
        ['tests/client_vue2/todo/components/todo-cmp_test.js', 'client/dev/todo/components/todo-cmp_test.js'],
        ['tests/client_vue2/todo/services/todo-service_test.js', 'client/dev/todo/services/todo-service_test.js']
      ];
      yoUtils.directory(this.generator, _pathTest, this.generator);
    }

    this.generator.template('tasks/client/vue2/watch.js', 'tasks/client/watch.js', {secure: !!this.generator.secure});
  }

  copyComponent(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'vue2/component.js', 
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/components/${this.generator.name}.js`, {
        nameCapitalized: utils.capitalizeFirst(this.generator.name), 
        name: this.generator.name, 
        feature: this.generator.options.feature
    });

    this.generator.template(_pathTemplate + 'vue2/component.css', 
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/styles/${this.generator.name}.css`
    );

    this.generator.template(_pathTemplate + 'vue2/component_test.js', 
      `${this.testsPath + this.generator.options.feature}/components/${this.generator.name}_test.js`, {
        name: utils.capitalizeFirst(this.generator.name), 
        nameLowerCase: this.generator.name.toLowerCase()
    });
  }

  copyDirective(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'vue2/directive.js', 
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/directives/${this.generator.name}.js`, {
        name: this.generator.name
    });

    this.generator.template(_pathTemplate + 'vue2/directive_test.js', 
      `${this.testsPath + this.generator.options.feature}/directives/${this.generator.name}_test.js`, {
        name: this.generator.name
    });
  }


  copyFactory(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'vue2/factory.js', 
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/factory/${this.generator.name}.js`, {
        name: utils.capitalizeFirst(this.generator.name)
    });

    this.generator.template(_pathTemplate + 'vue2/factory_test.js', 
      `${this.testsPath + this.generator.options.feature}/factory/${this.generator.name}_test.js`, {
        name: utils.capitalizeFirst(this.generator.name)
    });
  }

  copyService(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'vue2/service.js', 
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/services/${this.generator.name}.js`, {
        name: this.generator.name
    });

    this.generator.template(_pathTemplate + 'vue2/service_test.js', 
      `${this.testsPath + this.generator.options.feature}/services/${this.generator.name}_test.js`, {
        name: this.generator.name
    });
  }

  copyModel(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'vue2/model.js', 
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/models/${this.generator.name}.js`, {
        name: this.generator.name
    });

    this.generator.template(_pathTemplate + 'vue2/model_test.js', 
      `${this.testsPath + this.generator.options.feature}/models/${this.generator.name}_test.js`, {
        name: this.generator.name
    });
  }

  copyFilter(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'vue2/filter.js', 
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/filters/${this.generator.name}.js`, {
        name: this.generator.name
    });

    this.generator.template(_pathTemplate + 'vue2/filter_test.js', 
      `${this.testsPath + this.generator.options.feature}/filters/${this.generator.name}_test.js`, {
        name: this.generator.name
    });
  }

  copyStyle(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'style.css', 
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/styles/${this.generator.name}.css`
    );
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

class VueFactory {
  static tokens() {
    return {
      VUE2: 'vue2'
    };
  }

  static build(token, gen) {
    switch(token) {
      case VueFactory.tokens().VUE2: return new Vue2(gen);
      default: throw new Error(`Invalid Vue token: ${token}.`);
    }
  }
}

exports.Vue2 = Vue2;
exports.VueFactory = VueFactory;
