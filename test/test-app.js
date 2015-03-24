'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('ng-fullstack:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      .withPrompts({})
      .on('end', done);
  });

  it('creates default files', function () {

    var _files =
    [
      '.editorconfig',
      '.jshintrc',
      '.bowerrc',
      '.travis.yml',
      '.gitignore',
      '.editorconfig',
      '.jshintrc',

      'bower.json',
      'package.json',
      'gulpfile.js',
      'karma.conf.js',
      'protractor.conf.js',
      'newrelic.js',
      'procfile.txt',

      // server stuff

      'index.js', // babel's entry point

      'server/server.js',

      'server/routes/index.js',

      'server/constants/db.json',

      'server/config/db.conf.js',
      'server/config/routes.conf.js',

      'server/commons/socket/socket-events.js',
      'server/commons/static/index.js',
      'server/commons/static/index.js',
      'server/commons/static/index.js',

      'server/auth/local/index.js',

      'server/api/todo/controller/todo.controller.js',
      'server/api/todo/dao/todo.dao.js',
      'server/api/todo/model/todo.model.js',
      'server/api/todo/routes/todo.routes.js',


      // client stuff

      'client/dev/favicon.png',
      'client/dev/index.html',

      'client/dev/css/best_css_ever.css',
      'client/dev/css/events.less',
      'client/dev/css/fonts.less',
      'client/dev/css/frameworks_overrides.less',
      'client/dev/css/media_queries.less',
      'client/dev/css/position.less',
      'client/dev/css/styles.less',

      'client/dev/imgs/todo-bkg.png',

      'client/dev/js/app.js',

      'client/dev/js/todo/controllers/todo.controller.js',
      'client/dev/js/todo/daos/todo.dao.js',
      'client/dev/js/todo/model/todo.model.js',
      'client/dev/js/todo/resource/todo.resource.js',

      'client/dev/partials/views/todo.html',

      // tests - client

      'tests/client/_helpers/invalid-inputs.js',

      'tests/client/todo/controllers/todo.controller_test.js',
      'tests/client/todo/daos/todo.dao_test.js',
      'tests/client/todo/models/todo.model_test.js',
      'tests/client/todo/controllers/todo.controller_test.js',
      'tests/client/todo/controllers/todo.controller_test.js',

      // tests - server

      'tests/server/daos/todo.dao_test.js',
      'tests/server/helpers/db.js',
      'tests/server/helpers/db.json',

      // tests - e2e

      'tests/e2e/todo.e2e._test.js']

    assert.file(_files);
  });
});
