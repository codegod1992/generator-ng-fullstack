import yeoman from 'yeoman-generator';
import {ControllerSubGenerator} from '../_ng/sub_generators_controller';

export default class ControllerGenerator extends yeoman.generators.Base {
    constructor(args, options, config) {
      super(args, options, config);

      this.generator = new ControllerSubGenerator(this);
    }

    initializing() {
      this.generator.initializing();
    }

    writing() {
      this.generator.writing();
    }
}
