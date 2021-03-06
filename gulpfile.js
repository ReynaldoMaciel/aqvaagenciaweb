'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');

var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('all:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./js/**/*.js', ['minify:js']);
});
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});
 
gulp.task('minify:js', function (cb) {
  pump([
        gulp.src('js/**/*.js'),
        uglify(),
        gulp.dest('./dist')
    ],
    cb
  );
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('js:watch', function () {
  gulp.watch('./js/**/*.js', ['minify:js']);
});