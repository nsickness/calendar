'use strict';

var gulp = require('gulp');
var ignore = require('gulp-ignore');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var cmq = require('gulp-combine-mq');
var cssMin = require('gulp-cssmin');
var csscomb = require('gulp-csscomb');
var gulpif = require('gulp-if');
var rename = require('gulp-rename');
var options = require('../config');

gulp.task('scss', function () {

     var scss = gulp.src(options.styles.src)
        .pipe(gulpif(process.env.NODE_ENV === 'development', sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix('last 2 versions', '> 1%', 'ie 10'))
        .pipe(cmq({
             beautify: true
        }))
        .pipe(csscomb())
        .pipe(gulpif(process.env.NODE_ENV === 'development',sourcemaps.write()))
        .pipe(gulp.dest(options.styles.dest))

    if(process.env.NODE_ENV === 'production') {
        scss.pipe(cssMin())
            .pipe(rename({
                suffix: '.min'
            }))
            .pipe(gulp.dest(options.styles.dest));
    }

    return scss;
});