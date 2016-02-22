import {expect} from 'chai';
import sinon from 'sinon';
import knownPaths from '../../_ng/utils/known_paths';

import {ViewSubGenerator} from '../../_ng/client/sub_generators_view';

describe('ViewSubGenerator', () => {
  describe('creation', () => {
    it('should have the right param passed to wrapper', () => {
      let _gen = {a: true};
      let _dsg = new ViewSubGenerator(_gen);

      expect(_dsg.wrapper).to.equal(_gen);
    });
  });

  describe('initializing', () => {
    it('should have the initializing called with the right stuff', () => {
      let _gen = {
        argument: () => {}
      };

      sinon.mock(_gen.argument);

      let _dsg = new ViewSubGenerator(_gen);

      _dsg.initializing();

      expect(_dsg.wrapper.argument).to.have.been.called;
    });
  });

  describe('writing', () => {
    it('should have the initializing called with the right stuff', () => {
      let _gen = {
        name: 'a',
        options: {feature: 'c'},
        template: sinon.spy()
      };

      let _dsg = new ViewSubGenerator(_gen);

      _dsg.writing();

      let _firstCall = ['view.html', knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '//templates/' + _gen.name + '.html'];

      expect(_dsg.wrapper.writing).to.have.been.called;
      expect(_dsg.wrapper.template.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
    });
  });
});
