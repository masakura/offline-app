'use strict';

var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var runSequence = require('run-sequence');

gulp.task('gh-pages', function () {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

gulp.task('deploy', function () {
  runSequence('clean', ['html', 'fonts', 'other'] , 'manifest', 'gh-pages');
});
