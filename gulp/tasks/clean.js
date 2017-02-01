'use strict';

var gulp = require('gulp');
var del = require('del');
var options = require('../config');


gulp.task('clean', function() {

    return del([options.dist]);

});