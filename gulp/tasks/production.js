'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var options = require('../config');

gulp.task('prod', function(cb) {

    cb = cb || function() {};
    
    process.env.NODE_ENV = 'production';

    runSequence(['scss', 'js', 'images'], cb);

});