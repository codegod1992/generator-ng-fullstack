import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';

describe('NgFullstack:pipe', function () {
  before((done) => {
    helpers.run(path.join(__dirname, '../../pipe'))
      .withArguments('something')
      .withOptions({ skipInstall: true, feature: 'something-useful' })
      .on('end', done);
  });

  it('creates files', function() {
    assert.file([
      'client/dev/js/something-useful/pipes/something.pipe.ts',
      'tests/client/something-useful/pipes/something.pipe_test.js'
    ]);
  });
});
