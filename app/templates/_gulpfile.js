"use strict";

// TODO: modularize this, make sure different files know to do one thing well, so it won't be as messy as this one

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-minify-css');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var less = require('gulp-less');
var del = require('del');
var coveralls = require('gulp-coveralls');
var karma = require('karma').server;
var browserSync = require('browser-sync');

var DEV_DIR = './client/dev/';
var TEMP_DIR = './client/__tmp/'; // working on it dir
var DIST_DIR = './client/dist/';

var _js = DEV_DIR + 'js/**/*.js';
var _less = DEV_DIR + 'css/**/*.less';
var _images = DEV_DIR + 'imgs/*';
var _fonts = DEV_DIR + 'fonts/*';
var _partials = DEV_DIR + 'partials/**/*';
var _indexHTML = DEV_DIR + 'index.html';

gulp.task('html,css,js:temp', function()
{
  gulp
    .src(_indexHTML)
    .pipe(usemin({js0: [rev()], js1: [rev()], css0: [rev(), less()]}))
    .pipe(gulp.dest(TEMP_DIR));
})

gulp.task('partials:temp', function()
{
  return gulp
    .src(_partials)
    .pipe(gulp.dest(TEMP_DIR + 'partials/'));
})

gulp.task('imgs:temp', function()
{
  return gulp
    .src(_images)
    .pipe(gulp.dest(TEMP_DIR + 'imgs/'));
})

gulp.task('fonts:temp', function()
{
  return gulp
    .src(_fonts)
    .pipe(gulp.dest(TEMP_DIR + 'fonts/'));
})


gulp.task('html,css,js:dist', function()
{
  return gulp
    .src(_indexHTML)
    .pipe(usemin({js0: [rev(), uglify()], js1: [rev(), uglify()], css0: [cssmin(), rev(), less()]}))
    .pipe(gulp.dest(DIST_DIR));
})

gulp.task('fonts:dist', function()
{
  return gulp
          .src(_fonts)
          .pipe(gulp.dest(DIST_DIR + 'fonts/'));
})

gulp.task('partials:dist', function()
{
  return gulp
          .src(_partials)
          .pipe(gulp.dest(DIST_DIR + 'partials/'));
})

gulp.task('imgs:dist', function()
{
  return gulp
          .src(_images)
          .pipe(gulp.dest(DIST_DIR+ 'imgs/'));
})

gulp.task('build', ['del_dist', 'unit_test_client', 'partials:dist', 'imgs:dist', 'fonts:dist', 'html,css,js:dist']);
gulp.task('build_temp', ['del_temp', 'partials:temp', 'imgs:temp', 'fonts:temp', 'html,css,js:temp']);

gulp.task('browser_sync', function()
{
  return browserSync.reload();
})

gulp.task('watch', ['del_temp', 'build_temp', 'browser_sync'], function()
{
  browserSync({proxy: "http://localhost:3333", reloadDelay: 1000});

  var _watchable = [];

  _watchable.push(_indexHTML);
  _watchable.push(_js);
  _watchable.push(_less);
  _watchable.push(_images);
  _watchable.push(_partials);
  _watchable.push(_fonts);

  return gulp.watch(_watchable, ['build_temp', 'browser_sync']);
});

gulp.task('del_temp', function()
{
  return del.sync([TEMP_DIR]);
})

gulp.task('del_dist', function()
{
    return del.sync([DIST_DIR]);
})

gulp.task('unit_test_client', function(done)
{
    return karma
            .start({
                configFile: __dirname + '/karma.conf.js',
                browsers: ['PhantomJS'],
                singleRun: true
            }, done);
})

gulp.task('coverage_frontend', ['unit_test'], function()
{
    return gulp
            .src('unit_coverage/**/lcov.info')
            .pipe(coveralls());
})
