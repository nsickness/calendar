'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var options = require('../config');

gulp.task('dev', function(cb) {

    cb = cb || function() {};

    process.env.NODE_ENV === 'development';
    runSequence(['scss', 'js', 'watch'], cb);

});