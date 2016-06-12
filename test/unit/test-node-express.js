import {expect} from 'chai';
import sinon from 'sinon';
import knownPaths from '../../_ng/utils/known_paths';
import {NodeExpressStandard, NodeExpressBabel, NodeExpressTypescript} from '../../_ng/server/node_express';
import {NodeFactory} from '../../_ng/server/node_factory';

describe('node', () => {
  describe('factory', () => {
    it('should have the right values for the tokens()', () => {
      expect(NodeFactory.tokensCompiler().NODE).to.equal('node');
      expect(NodeFactory.tokensCompiler().BABEL).to.equal('babel');
      expect(NodeFactory.tokensCompiler().TYPESCRIPT).to.equal('typescript');
    });

    it('should have an instance of NodeExpressStandard', () => {
      expect(NodeFactory.build({transpilerServer: 'node', webFrameworkServer: 'express'}) instanceof NodeExpressStandard).to.be.true;
    });

    it('should have an instance of NodeExpressBabel', () => {
      expect(NodeFactory.build({transpilerServer: 'babel', webFrameworkServer: 'express'}) instanceof NodeExpressBabel).to.be.true;
    });

    it('should have an instance of NodeExpressTypescript', () => {
      expect(NodeFactory.build({transpilerServer: 'typescript', webFrameworkServer: 'express'}) instanceof NodeExpressTypescript).to.be.true;
    });
  });

  describe('node_standard', () => {
    describe('creation', () => {
      it('should have the wrapper as the object passed by param', () => {
        let _newGenerator = {a: true};

        let _n = new NodeExpressStandard(_newGenerator);

        expect(_n.wrapper).to.equal(_newGenerator);
      })
    })

    describe('copyFiles', () => {
      it('should call the right methods with the right params', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          template: sinon.spy(),
          directory: sinon.spy()
        }

        let _n = new NodeExpressStandard(_newGenerator);

        _n.copyFiles();

        let _firstCall = [`node/express/no_transpiler/endpoint.route.js`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/routes/${_newGenerator.name}-route.js`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase()}];
        let _secondCall = [`node/express/no_transpiler/endpoint.controller.js`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/controller/${_newGenerator.name}-controller.js`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase()}];
        let _thirdCall = [`node/express/no_transpiler/endpoint.dao.js`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/dao/${_newGenerator.name}-dao.js`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase()}];
        let _fourthCall = [`node/express/no_transpiler/endpoint.model.js`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/model/${_newGenerator.name}-model.js`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase()}];
        let _fifthCall = [`node/express/no_transpiler/endpoint.dao_test.js`, `${knownPaths.PATH_SERVER_FEATURES_TEST + _newGenerator.feature}/dao/${_newGenerator.name}-dao_test.js`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase(), feature: _newGenerator.feature}];

        expect(_n.wrapper.template).to.have.been.called;
        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirdCall[0], _thirdCall[1], _thirdCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fourthCall[0], _fourthCall[1], _fourthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fifthCall[0], _fifthCall[1], _fifthCall[2])).to.be.true;
      });
    });

    describe('copyForMainGenerator', () => {
      it('should call with the right params - not secure', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          directory: sinon.spy(),
          template: sinon.spy()
        }

        let _n = new NodeExpressStandard(_newGenerator);

        _n.copyForMainGenerator();

        let _firstCall = [`index_node.js`, 'index.js'];
        let _secondCall = [`server_node/express/server_node_express/server.js`, `server/server.js`];
        let _thirdCall = [`tasks/server`, `tasks/server`];
        let _fourthCall = [`tests/server`, `tests/server`];

        expect(_n.wrapper.template).to.have.been.called;

        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1])).to.be.true;
        expect(_n.wrapper.directory.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;
        expect(_n.wrapper.directory.calledWith(_fourthCall[0], _fourthCall[1])).to.be.true;
      });

      it('should call with the right params - secure', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          secure: true,
          directory: sinon.spy(),
          template: sinon.spy()
        }

        let _n = new NodeExpressStandard(_newGenerator);

        _n.copyForMainGenerator();

        let _firstCall = [`index_node.js`, 'index.js'];
        let _secondCall = [`server_node/express/server_node_express/server_https.js`, `server/server.js`];
        let _thirdCall = [`tasks/server`, `tasks/server`];
        let _fourthCall = [`tests/server`, `tests/server`];

        expect(_n.wrapper.template).to.have.been.called;

        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1])).to.be.true;
        expect(_n.wrapper.directory.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;
        expect(_n.wrapper.directory.calledWith(_fourthCall[0], _fourthCall[1])).to.be.true;
      });
    })
  })

  describe('node_babel', () => {
    describe('creation', () => {
      it('should have the wrapper as the object passed by param', () => {
        let _newGenerator = {a: true};

        let _n = new NodeExpressBabel(_newGenerator);

        expect(_n.wrapper).to.equal(_newGenerator);
      })
    })

    describe('copyFiles', () => {
      it('should call the right methods with the right params', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          template: sinon.spy()
        }

        let _n = new NodeExpressBabel(_newGenerator);

        _n.copyFiles();

        let _firstCall = [`node/express/babel/endpoint.route.js`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/routes/${_newGenerator.name}-route.js`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase()}];
        let _secondCall = [`node/express/babel/endpoint.controller.js`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/controller/${_newGenerator.name}-controller.js`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase()}];
        let _thirdCall = [`node/express/babel/endpoint.dao.js`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/dao/${_newGenerator.name}-dao.js`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase()}];
        let _fourthCall = [`node/express/babel/endpoint.model.js`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/model/${_newGenerator.name}-model.js`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase()}];
        let _fifthCall = [`node/express/babel/endpoint.dao_test.js`, `${knownPaths.PATH_SERVER_FEATURES_TEST + _newGenerator.feature}/dao/${_newGenerator.name}-dao_test.js`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase(), feature: _newGenerator.feature}];

        expect(_n.wrapper.template).to.have.been.called;
        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirdCall[0], _thirdCall[1], _thirdCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fourthCall[0], _fourthCall[1], _fourthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fifthCall[0], _fifthCall[1], _fifthCall[2])).to.be.true;
      });
    });

    describe('copyForMainGenerator', () => {
      it('should call with the right params - not secure', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          directory: sinon.spy(),
          template: sinon.spy()
        }

        let _n = new NodeExpressBabel(_newGenerator);

        _n.copyForMainGenerator();

        let _firstCall = [`index_babel.js`, 'index.js'];
        let _secondCall = [`server_node/express/server_node_express_babel/server.js`, `server/server.js`];
        let _thirdCall = [`tasks/server`, `tasks/server`];
        let _fourthCall = [`tests/server`, `tests/server`];

        expect(_n.wrapper.template).to.have.been.called;

        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1])).to.be.true;
        expect(_n.wrapper.directory.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;
        expect(_n.wrapper.directory.calledWith(_fourthCall[0], _fourthCall[1])).to.be.true;
      });

      it('should call with the right params - secure', () => {
        let _newGenerator = {
          feature: 'a',
          secure: true,
          name: 'b',
          directory: sinon.spy(),
          template: sinon.spy()
        }

        let _n = new NodeExpressBabel(_newGenerator);

        _n.copyForMainGenerator();

        let _firstCall = [`index_babel.js`, 'index.js'];
        let _secondCall = [`server_node/express/server_node_express_babel/server_https.js`, `server/server.js`];
        let _thirdCall = [`tasks/server`, `tasks/server`];
        let _fourthCall = [`tests/server`, `tests/server`];

        expect(_n.wrapper.template).to.have.been.called;

        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1])).to.be.true;
        expect(_n.wrapper.directory.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;
        expect(_n.wrapper.directory.calledWith(_fourthCall[0], _fourthCall[1])).to.be.true;
      });
    })
  })

  describe('node_typescript', () => {
    describe('creation', () => {
      it('should have the wrapper as the object passed by param', () => {
        let _newGenerator = {a: true};

        let _n = new NodeExpressTypescript(_newGenerator);

        expect(_n.wrapper).to.equal(_newGenerator);
      })
    })

    describe('copyFiles', () => {
      it('should call the right methods with the right params', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          template: sinon.spy()
        }

        let _n = new NodeExpressTypescript(_newGenerator);

        _n.copyFiles();

        let _firstCall = [`node/express/typescript/endpoint.route.ts`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/routes/${_newGenerator.name}-route.ts`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase()}];
        let _secondCall = [`node/express/typescript/endpoint.controller.ts`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/controller/${_newGenerator.name}-controller.ts`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase()}];
        let _thirdCall = [`node/express/typescript/endpoint.dao.ts`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/dao/${_newGenerator.name}-dao.ts`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase()}];
        let _fourthCall = [`node/express/typescript/endpoint.model.ts`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/model/${_newGenerator.name}-model.ts`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase()}];
        let _fifthCall = [`node/express/typescript/endpoint.dao_test.js`, `${knownPaths.PATH_SERVER_FEATURES_TEST + _newGenerator.feature}/dao/${_newGenerator.name}-dao_test.js`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase(), feature: _newGenerator.feature}];

        expect(_n.wrapper.template).to.have.been.called;
        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirdCall[0], _thirdCall[1], _thirdCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fourthCall[0], _fourthCall[1], _fourthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fifthCall[0], _fifthCall[1], _fifthCall[2])).to.be.true;
      });
    });

    describe('copyForMainGenerator', () => {
      it('should call with the right params - not secure', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          directory: sinon.spy(),
          template: sinon.spy()
        }

        let _n = new NodeExpressTypescript(_newGenerator);

        _n.copyForMainGenerator();

        let _templateCall = [`server_node/express/server_node_express_typescript/server.ts`, 'server/server.ts'];

        let _firstCall = [`index_tsc.js`, 'index.js'];
        let _secondCall = [`_tsconfig.json`, `tsconfig.json`];
        let _thirdCall = [`_typings_ng2_and_tsc_server.json`, `typings.json`];

        let _fourthCall = [`tasks/server`, `tasks/server`];
        let _fifthCall = [`tests/server`, `tests/server`];

        expect(_n.wrapper.template).to.have.been.called;

        expect(_n.wrapper.template.calledWith(_templateCall[0], _templateCall[1])).to.be.true;

        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;
        expect(_n.wrapper.directory.calledWith(_fourthCall[0], _fourthCall[1])).to.be.true;
        expect(_n.wrapper.directory.calledWith(_fifthCall[0], _fifthCall[1])).to.be.true;
      });

      it('should call with the right params - secure', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          secure: true,
          directory: sinon.spy(),
          template: sinon.spy()
        }

        let _n = new NodeExpressTypescript(_newGenerator);

        _n.copyForMainGenerator();

        let _templateCall = [`server_node/express/server_node_express_typescript/server_https.ts`, 'server/server.ts'];

        let _firstCall = [`index_tsc.js`, 'index.js'];
        let _secondCall = [`_tsconfig.json`, `tsconfig.json`];
        let _thirdCall = [`_typings_ng2_and_tsc_server.json`, `typings.json`];

        let _fourthCall = [`tasks/server`, `tasks/server`];
        let _fifthCall = [`tests/server`, `tests/server`];

        expect(_n.wrapper.template).to.have.been.called;

        expect(_n.wrapper.template.calledWith(_templateCall[0], _templateCall[1])).to.be.true;

        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;
        expect(_n.wrapper.directory.calledWith(_fourthCall[0], _fourthCall[1])).to.be.true;
        expect(_n.wrapper.directory.calledWith(_fifthCall[0], _fifthCall[1])).to.be.true;
      });
    })
  });
})
