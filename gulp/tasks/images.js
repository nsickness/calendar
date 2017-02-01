'use strict';

var gulp = require('gulp');
var ignore = require('gulp-ignore');
var options = require('../config');

gulp.task('images', ['svgmin'], function() {
    gulp.src(options.images.src)
        .pipe(gulp.dest(options.images.dest));
});