'use strict';

import path from 'path';
import { assert } from 'yeoman-generator';
import { test as helpers } from 'yeoman-generator';
import { createYoRc } from '../_helpers/mocks';

describe('subgenerator -> component', () => {
  describe('ng1', () => {
    describe('testsSeparated is true', () => {
      before(function (done) {
        helpers
          .run(path.join(__dirname, '../../component'))
          .inTmpDir(function (dir) {
            createYoRc({
              'generator-ng-fullstack': {
                'client': 'ng1',
                'testsSeparated': true
              }
            }, this.async());
          })
          .withArguments('user')
          .withOptions({ 'skip-install': true, feature: 'yo' })
          .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'client/dev/yo/components/user.js',
          'client/dev/yo/templates/user.html',
          'client/dev/yo/styles/user.css',
          'tests/client/yo/components/user_test.js'
        ]);
      });
    });

    describe('testsSeparated is false', () => {
      before(function (done) {
        helpers
          .run(path.join(__dirname, '../../component'))
          .inTmpDir(function (dir) {
            createYoRc({
              'generator-ng-fullstack': {
                'client': 'ng1',
                'testsSeparated': false
              }
            }, this.async());
          })
          .withArguments('user')
          .withOptions({ 'skip-install': true, feature: 'yo' })
          .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'client/dev/yo/components/user.js',
          'client/dev/yo/templates/user.html',
          'client/dev/yo/styles/user.css',
          'client/dev/yo/components/user_test.js'
        ]);
      });
    });
  });

  describe('ng2', () => {
    describe('testsSeparated is true', () => {
      before(function (done) {
        helpers
          .run(path.join(__dirname, '../../component'))
          .inTmpDir(function (dir) {
            createYoRc({
              "generator-ng-fullstack": {
                "client": "ng2",
                "testsSeparated": true
              }
            }, this.async());
          })
          .withArguments('user')
          .withOptions({ 'skip-install': true, feature: 'yo' })
          .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'client/dev/yo/components/user.ts',
          'client/dev/yo/templates/user.html',
          'client/dev/yo/styles/user.css',
          'tests/client/yo/components/user_test.ts'
        ]);
      });
    });

    describe('testsSeparated is false', () => {
      before(function (done) {
        helpers
          .run(path.join(__dirname, '../../component'))
          .inTmpDir(function (dir) {
            createYoRc({
              "generator-ng-fullstack": {
                "client": "ng2",
                "testsSeparated": false
              }
            }, this.async());
          })
          .withArguments('user')
          .withOptions({ 'skip-install': true, feature: 'yo' })
          .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'client/dev/yo/components/user.ts',
          'client/dev/yo/templates/user.html',
          'client/dev/yo/styles/user.css',
          'client/dev/yo/components/user_test.ts'
        ]);
      });
    });
  });

  describe('vue2', () => {
    describe('testsSeparated is true', () => {
      before(function (done) {
        helpers
          .run(path.join(__dirname, '../../component'))
          .inTmpDir(function (dir) {
            createYoRc({
              "generator-ng-fullstack": {
                "client": "vue2",
                "testsSeparated": true
              }
            }, this.async());
          })
          .withArguments('user')
          .withOptions({ 'skip-install': true, feature: 'yo' })
          .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'client/dev/yo/components/user.js',
          'client/dev/yo/styles/user.css',
          'tests/client/yo/components/user_test.js'
        ]);
      });
    });

    describe('testsSeparated is false', () => {
      before(function (done) {
        helpers
          .run(path.join(__dirname, '../../component'))
          .inTmpDir(function (dir) {
            createYoRc({
              "generator-ng-fullstack": {
                "client": "vue2",
                "testsSeparated": false
              }
            }, this.async());
          })
          .withArguments('user')
          .withOptions({ 'skip-install': true, feature: 'yo' })
          .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'client/dev/yo/components/user.js',
          'client/dev/yo/styles/user.css',
          'client/dev/yo/components/user_test.js'
        ]);
      });
    });
  })

  describe('aurelia1', () => {
    describe('testsSeparated is true', () => {
      before(function (done) {
        helpers
          .run(path.join(__dirname, '../../component'))
          .inTmpDir(function (dir) {
            createYoRc({
              "generator-ng-fullstack": {
                "client": "aurelia1",
                "testsSeparated": true
              }
            }, this.async());
          })
          .withArguments('user')
          .withOptions({ 'skip-install': true, feature: 'yo' })
          .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'client/dev/yo/components/user.js',
          'client/dev/yo/components/user.html',
          'client/dev/yo/styles/user.css',
          'tests/client/yo/components/user_test.js'
        ]);
      });
    });

    describe('testsSeparated is false', () => {
      before(function (done) {
        helpers
          .run(path.join(__dirname, '../../component'))
          .inTmpDir(function (dir) {
            createYoRc({
              "generator-ng-fullstack": {
                "client": "aurelia1",
                "testsSeparated": false
              }
            }, this.async());
          })
          .withArguments('user')
          .withOptions({ 'skip-install': true, feature: 'yo' })
          .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'client/dev/yo/components/user.js',
          'client/dev/yo/components/user.html',
          'client/dev/yo/styles/user.css',
          'client/dev/yo/components/user_test.js'
        ]);
      });
    });
  })

})
