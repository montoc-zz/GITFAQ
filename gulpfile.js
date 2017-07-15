const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const plumber = require('gulp-plumber');
const livereload = require('gulp-livereload');
const sass = require('gulp-ruby-sass');
const babel = require('gulp-babel');
const cleanCSS = require('gulp-clean-css');
const eslint = require('gulp-eslint');
/***************************
 * Javascript linting
 ***************************/

gulp.task('lint', () => gulp.src([ './client/**/*.js'])
  .pipe(eslint()).pipe(eslint.format()).pipe(eslint.failAfterError()));

