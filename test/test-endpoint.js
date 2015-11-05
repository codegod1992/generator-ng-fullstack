import path from 'path';
import os from 'os';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';
import {MockConfigFile} from '../_test_helpers/mocks';

describe('NgFullstack:endpoint', () => {
  describe('node', () => {
    before(function (done) {
      helpers
      .run(path.join(__dirname, '../endpoint'))
      .inTmpDir(function() {
        MockConfigFile.create({
          "generator-ng-fullstack": {
            "transpilerServer": "node",
            "server": "node"
          }
        }, this.async());
      })
      .withArguments('endp')
      .withPrompts({appName: "a", githubUsername: "b", transpilerServer: "node", server: "node"})
      .withOptions({feature: 'todo2'})
      .on('end', done);
    });

    it('creates files', () => {
      assert.file([
        'server/api/todo2/controller/endp.controller.js',
        'server/api/todo2/dao/endp.dao.js',
        'server/api/todo2/model/endp.model.js',
        'server/api/todo2/routes/endp.route.js',

        'tests/server/todo2/dao/endp.dao_test.js'
      ]);
    });
  })

  describe('go', () => {
    before((done) => {
      helpers
      .run(path.join(__dirname, '../endpoint'))
      .inTmpDir(function() {
        MockConfigFile.create({
          "generator-ng-fullstack": {
            "server": "go"
          }
        }, this.async());
      })
      .withArguments('endp')
      .withPrompts({appName: "a", githubUsername: "b", server: "go"})
      .withOptions({feature: 'todo2'})
      .on('end', done);
    });

    it('creates files', () => {
      assert.file([
        'server/api/todo2/controller/endpcontroller.go',
        'server/api/todo2/dao/endpdao.go',
        'server/api/todo2/model/endpmodel.go',
        'server/api/todo2/routes/endproute.go',

        'server/api/todo2/controller/endpcontroller_test.go',
        'server/api/todo2/routes/endproute_test.go',
        'server/api/todo2/dao/endpdao_test.go',
        'server/api/todo2/model/endpmodel_test.go'
      ]);
    });
  })
});
