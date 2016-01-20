import knownPaths from '../utils/known_paths';
import optionsParser from '../utils/options_parser';
import utils from '../utils/utils';

export class ComponentSubGenerator {
  constructor(generator) {
    this.wrapper = generator;
  }

  initializing() {
    this.wrapper.argument('name', {
      required: true,
      type: String,
      desc: 'component'
    });
  }

  writing() {
    let name = this.wrapper.name;
    let _firstLetterUppercased = name.charAt(0).toUpperCase() + name.slice(1);
    let nameLowerCase = name.toLowerCase();
    let _feature = optionsParser.getFeature(this.wrapper.options);

    this.wrapper.template('component.ts', `${knownPaths.PATH_CLIENT_FEATURES + _feature}components/${name}_cmp.ts`, {name: _firstLetterUppercased});
    this.wrapper.template('component.html', `${knownPaths.PATH_CLIENT_FEATURES + _feature}components/${name}.html`, {name});
    this.wrapper.template('component.css', `${knownPaths.PATH_CLIENT_FEATURES + _feature}components/${name}.css`);
    this.wrapper.template('component_test.ts', `${knownPaths.PATH_CLIENT_FEATURES_TEST + _feature}components/${name}_cmp_test.ts`, {name: _firstLetterUppercased, nameLowerCase});
  }
}
