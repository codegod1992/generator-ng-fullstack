"use strict";

const {NodeExpressStandard} = require('./node_express');
const {NodeExpressBabel} = require('./node_express');
const {NodeExpressTypescript} = require('./node_express');

const {NodeKoaStandard} = require('./node_koa');
const {NodeKoaBabel} = require('./node_koa');
const {NodeKoaTypescript} = require('./node_koa');

exports.NodeFactory = class NodeFactory {
  static tokensCompiler() {
    return {
      NODE: "node",
      BABEL: "babel",
      TYPESCRIPT: "typescript"
    };
  }

  static tokensWebFramework() {
    return {
      EXPRESS: "express",
      KOA: "koa"
    };
  }

  static build(generator) {
    let _isKoa = generator.nodeWebFrameworkServer === NodeFactory.tokensWebFramework().KOA;
    let _isExpress = generator.nodeWebFrameworkServer === NodeFactory.tokensWebFramework().EXPRESS;
    let _isNotInformed = generator.nodeWebFrameworkServer == undefined;

    if (_isKoa) {
      switch(generator.transpilerServer) {
        case NodeFactory.tokensCompiler().NODE: return new NodeKoaStandard(generator);
        case NodeFactory.tokensCompiler().BABEL: return new NodeKoaBabel(generator);
        case NodeFactory.tokensCompiler().TYPESCRIPT: return new NodeKoaTypescript(generator);
      }
    }

    if (_isExpress || _isNotInformed) {
      switch(generator.transpilerServer) {
        case NodeFactory.tokensCompiler().NODE: return new NodeExpressStandard(generator);
        case NodeFactory.tokensCompiler().BABEL: return new NodeExpressBabel(generator);
        case NodeFactory.tokensCompiler().TYPESCRIPT: return new NodeExpressTypescript(generator);
      }
    }
  }
};
