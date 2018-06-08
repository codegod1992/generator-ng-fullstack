const {expect} = require('chai');
const sinon = require('sinon');
const knownPaths = require('../../_ng/utils/known_paths');
const utils = require('../../_ng/utils/utils');

const {PipeSubGenerator} = require('../../_ng/client/sub_generators_pipe');

describe('PipeSubGenerator', () => {
  describe('creation', () => {
    it('should have the right param passed to wrapper', () => {
      let _gen = {
        a: true,
        config: {
          get(){}
        }
      };
      let _fsg = new PipeSubGenerator(_gen);

      expect(_fsg.generator).to.equal(_gen);
    });
  });

  describe('initializing', () => {
    it('should have the initializing called with the right stuff', () => {
      let _gen = {
        argument: () => {},
        config: {
          get(){}
        }
      };

      sinon.mock(_gen.argument);

      let _fsg = new PipeSubGenerator(_gen);

      _fsg.initializing();

      expect(_fsg.generator.argument).to.have.been.called;
    });
  });

  describe('writing', () => {
    it('should throw FeatureMissingError', () => {
      let _gen = {
        name: 'a',
        options: {},
        template: sinon.spy(),
        config: {
          get(){
            return 'ng2'
          }
        }
      };

      sinon.mock(_gen.template);

      let _fsg = new PipeSubGenerator(_gen);

      expect(() => _fsg.writing()).to.throw(Error, /Do it like this: --feature something-here/);
    });

    it('should throw ModuleDoesntImplementError', () => {
      let _gen = {
        name: 'a',
        options: {
          feature: 'c'
        },
        template: sinon.spy(),
        config: {
          get(){
            return 'ng1'
          }
        }
      };

      sinon.mock(_gen.template);

      let _fsg = new PipeSubGenerator(_gen);

      expect(() => _fsg.writing()).to.throw(Error, /ng1 doesn't implement pipe/);
    });

    it('should have the writing called with the right stuff', () => {
      let _gen = {
        name: 'a',
        options: {feature: 'c'},
        template: sinon.spy(),
        config: {
          get(){
            return 'ng2'
          }
        }
      };

      let _fsg = new PipeSubGenerator(_gen);

      _fsg.writing();

      let _firstCall = [
        'ng2/pipe.ts',
        knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/pipes/' + _gen.name + '.ts', {
          name: _gen.name,
          nameCapitalized: utils.capitalizeFirst(_gen.name)
        }];

      let _secondCall = [
        'ng2/pipe_test.js',
        knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/pipes/' + _gen.name + '_test.js', {
          name: _gen.name,
          nameCapitalized: utils.capitalizeFirst(_gen.name)
        }];

      expect(_fsg.generator.writing).to.have.been.called;
      expect(_fsg.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
      expect(_fsg.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
    });

    it('should have the writing called with the right stuff - testsSeparated', () => {
      let _gen = {
        name: 'a',
        options: {feature: 'c'},
        testsSeparated: false,
        template: sinon.spy(),
        config: {
          get(token) {
            switch (token) {
              case "testsSeparated": return false;
              default: return 'ng2';
            }
          }
        }
      };

      let _fsg = new PipeSubGenerator(_gen);

      _fsg.writing();

      let _firstCall = [
        'ng2/pipe.ts',
        knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/pipes/' + _gen.name + '.ts', {
          name: _gen.name,
          nameCapitalized: utils.capitalizeFirst(_gen.name)
        }];

      let _secondCall = [
        'ng2/pipe_test.js',
        knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/pipes/' + _gen.name + '_test.js', {
          name: _gen.name,
          nameCapitalized: utils.capitalizeFirst(_gen.name)
        }];

      expect(_fsg.generator.writing).to.have.been.called;
      expect(_fsg.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
      expect(_fsg.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
    });
  });
});
