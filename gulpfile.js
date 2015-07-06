var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var uglyfly = require('gulp-uglyfly');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('default', ['sass', 'scripts']);

gulp.task('sass', function(done) {
  gulp.src('./src/scss/ionic.app.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('scripts', function() {
  return gulp.src(['./src/js/app.js','./src/js/**/*.js'])
    .pipe(concat('all.js'))
    .pipe(ngAnnotate())
    .pipe(gulp.dest('./www/js/'));
});


gulp.task('watch', function() {
  gulp.watch(['./src/scss/**/*.scss'], ['sass']);
  gulp.watch(['./src/js/**/*.js'], ['scripts']);
});

