const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const {createYoRc} = require('../_helpers/mocks');

describe('subgenerator -> service', () => {
  describe('ng1', () => {
    describe('testsSeparated is true', () => {
      before((done) => {
        helpers.run(path.join(__dirname, '../../service'))
        .inTmpDir(function(dir) {
          createYoRc({
            "generator-ng-fullstack": {
              "client": "ng1",
              "testsSeparated": true
            }
          }, this.async());
        })
        .withArguments('post')
        .withOptions({ 'skip-install': true, feature: 'http'})
        .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'client/dev/http/services/post.js',
          'tests/client/http/services/post_test.js'
        ]);
      });
    });

    describe('testsSeparated is false', () => {
      before((done) => {
        helpers.run(path.join(__dirname, '../../service'))
        .inTmpDir(function(dir) {
          createYoRc({
            "generator-ng-fullstack": {
              "client": "ng1",
              "testsSeparated": false
            }
          }, this.async());
        })
        .withArguments('post')
        .withOptions({ 'skip-install': true, feature: 'http'})
        .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'client/dev/http/services/post.js',
          'client/dev/http/services/post_test.js'
        ]);
      });
    });
  })
  
  describe('ng2', () => {
    describe('testsSeparated is true', () => {
      before((done) => {
        helpers.run(path.join(__dirname, '../../service'))
        .inTmpDir(function(dir) {
          createYoRc({
            "generator-ng-fullstack": {
              "client": "ng2",
              "testsSeparated": true
            }
          }, this.async());
        })
        .withArguments('post')
        .withOptions({ 'skip-install': true, feature: 'http'})
        .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'client/dev/http/services/post.ts',
          'tests/client/http/services/post_test.ts'
        ]);
      });
    });

    describe('testsSeparated is false', () => {
      before((done) => {
        helpers.run(path.join(__dirname, '../../service'))
        .inTmpDir(function(dir) {
          createYoRc({
            "generator-ng-fullstack": {
              "client": "ng2",
              "testsSeparated": false
            }
          }, this.async());
        })
        .withArguments('post')
        .withOptions({ 'skip-install': true, feature: 'http'})
        .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'client/dev/http/services/post.ts',
          'client/dev/http/services/post_test.ts'
        ]);
      });
    });
  })

  describe('vue2', () => {
    describe('testsSeparated is true', () => {
      before((done) => {
        helpers.run(path.join(__dirname, '../../service'))
        .inTmpDir(function(dir) {
          createYoRc({
            "generator-ng-fullstack": {
              "client": "vue2",
              "testsSeparated": true
            }
          }, this.async());
        })
        .withArguments('post')
        .withOptions({ 'skip-install': true, feature: 'http'})
        .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'client/dev/http/services/post.js',
          'tests/client/http/services/post_test.js'
        ]);
      });
    });

    describe('testsSeparated is false', () => {
      before((done) => {
        helpers.run(path.join(__dirname, '../../service'))
        .inTmpDir(function(dir) {
          createYoRc({
            "generator-ng-fullstack": {
              "client": "vue2",
              "testsSeparated": false
            }
          }, this.async());
        })
        .withArguments('post')
        .withOptions({ 'skip-install': true, feature: 'http'})
        .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'client/dev/http/services/post.js',
          'client/dev/http/services/post_test.js'
        ]);
      });
    });
  })
});
