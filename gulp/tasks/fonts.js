'use strict';

var gulp = require('gulp');
var options = require('../config');

gulp.task('fonts', function () {
    return gulp.src(options.fonts.src)
        .pipe(gulp.dest(options.fonts.dest));
});