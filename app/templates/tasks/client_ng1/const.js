export const path = {
  ROOT: './',
  DEV: './client/dev/',
  DIST: './client/dist/'
}

export const tasks = {
  CLIENT_VIEWS_DIST: 'client.views:dist',
  CLIENT_FONT_DIST: 'client.fonts:dist',
  CLIENT_IMAGE_DIST: 'client.imgs:dist',
  CLIENT_REV_DIST: 'client.rev:dist',
  CLIENT_DEL_DIST: 'client.del:dist',
  CLIENT_BUILD_DIST: 'client.build:dist',

  CLIENT_UNIT_TEST: 'client.unit_test',
  CLIENT_COVERAGE: 'client.coverage',

  CLIENT_WATCH: 'client.watch',

  CLIENT_BROWSER_SYNC: 'client.browser_sync'
}
