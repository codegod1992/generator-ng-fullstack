import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';

describe('NgFullstack:controller', () => {
  before(function (done) {
    helpers.run(path.join(__dirname, '../../controller'))
      .withArguments('hue')
      .withOptions({ 'skip-install': true , feature: 'user'})
      .on('end', done);
  });

  it('creates files', () => {
    assert.file([
      'client/dev/user/controllers/hue.js',
      'tests/client/user/controllers/hue_test.js'
    ]);
  });
});
