const {expect} = require('chai');
const sinon = require('sinon');
const knownPaths = require('../../_ng/utils/known_paths');

const {ControllerSubGenerator} = require('../../_ng/client/sub_generators_controller');

describe('ControllerSubGenerator', () => {
  describe('creation', () => {
    it('should have the right param passed to wrapper', () => {
      let _gen = {
        a: true,
        config: {
          get(){
            return 'ng1';
          }
        }
      };
      let _csg = new ControllerSubGenerator(_gen);

      expect(_csg.generator).to.equal(_gen);
    });
  });

  describe('initializing', () => {
    it('should have the initializing called with the right stuff', () => {
      let _gen = {
        argument: () => {},
        config: {
          get(){
            return 'ng1'
          }
        }
      };

      let _csg = new ControllerSubGenerator(_gen);

      _csg.initializing();

      expect(_csg.generator.argument).to.have.been.called;
    });
  });

  describe('writing', () => {
    it('should throw FeatureMissingError', () => {
      let _gen = {
        name: 'a',
        appName: 'b',
        options: {},
        config: {
          get(){
            return 'ng1'
          }
        },
        template: sinon.spy()
      };

      let _csg = new ControllerSubGenerator(_gen);

      expect(() => _csg.writing()).to.throw(Error, /Do it like this: --feature something-here/);
    });

    it('should throw ModuleDoesntImplementError', () => {
      let _gen = {
        name: 'a',
        appName: 'b',
        options: {
          feature: 'c'
        },
        config: {
          get(){
            return 'ng2'
          }
        },
        template: sinon.spy()
      };

      let _csg = new ControllerSubGenerator(_gen);

      expect(() => _csg.writing()).to.throw(Error, /ng2 doesn't implement controller/);
    });

    it('should have the writing called with the right stuff', () => {
      let _gen = {
        name: 'a',
        appName: 'b',
        options: {
          feature: 'c'
        },
        config: {
          get(){
            return 'ng1'
          }
        },
        template: sinon.spy()
      };

      let _csg = new ControllerSubGenerator(_gen);

      let _firstCall = [
        'ng1/controller_client.js',
        knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/controllers/' + _gen.name + '.js', {
          name: _gen.name,
          appName: _gen.appName
        }];

      let _secondCall = [
        'ng1/controller_client_test.js',
        knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/controllers/' + _gen.name + '_test.js', {
          name: _gen.name,
          nameLowerCase: _gen.name.toLowerCase(),
          appName: _gen.appName
        }];

      _csg.writing();

      expect(_csg.generator.writing).to.have.been.called;
      expect(_csg.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
      expect(_csg.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
    });

    it('should have the writing called with the right stuff - testsSeparated', () => {
      let _gen = {
        name: 'a',
        appName: 'b',
        options: {
          feature: 'c'
        },
        testsSeparated:false,
        config: {
          get(token) {
            switch (token) {
              case "testsSeparated": return false;
              default: return 'ng1';
            }
          }
        },
        template: sinon.spy()
      };

      let _csg = new ControllerSubGenerator(_gen);

      let _firstCall = [
        'ng1/controller_client.js',
        knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/controllers/' + _gen.name + '.js', {
          name: _gen.name,
          appName: _gen.appName
        }];

      let _secondCall = [
        'ng1/controller_client_test.js',
        knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/controllers/' + _gen.name + '_test.js', {
          name: _gen.name,
          nameLowerCase: _gen.name.toLowerCase(),
          appName: _gen.appName
        }];

      _csg.writing();

      expect(_csg.generator.writing).to.have.been.called;
      expect(_csg.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
      expect(_csg.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
    });
  });
});
