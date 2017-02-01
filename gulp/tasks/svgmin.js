'use strict';

var gulp = require('gulp');
var svgmin = require('gulp-svgmin');
var options = require('../config');

gulp.task('svgmin', function () {

    gulp.src(options.images.svg_src)
        .pipe(svgmin())
        .pipe(gulp.dest(options.images.dest));

});