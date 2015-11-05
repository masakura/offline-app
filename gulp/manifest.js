'use strict';

const gulp = require('gulp');
const manifest = require('gulp-manifest');

gulp.task('manifest', () => {
  return gulp.src(['dist/**/*'], {
    base: './dist'
  })
    .pipe(manifest({
      hash: true,
      preferOnline: true,
      network: ['*'],
      filename: 'app.manifesft',
      exclude: 'app.manifest'
    }))
    .pipe(gulp.dest('dist'));
});
