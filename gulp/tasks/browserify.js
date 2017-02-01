'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var watchify = require('watchify');
var streamify = require('gulp-streamify');
var ignore = require('gulp-ignore');
var options = require('../config');

function buildScript(file, watch) {

    let workFile = options.scripts.src + file;
    

    let bundler = browserify({
        entries: workFile,
        debug: process.env.NODE_ENV === 'development',
        cache: {},
        packageCache: {},
        fullPaths: false
    });

    if (watch) {
        bundler = watchify(bundler);
    }

    let transformOptions = null;

    if (process.env.NODE_ENV === 'development') {
        transformOptions = {
            'presets': ["es2015", "react"],
            'plugins': ["transform-inline-environment-variables"]
        };
        bundler.transform("babelify", transformOptions);
    } else {
        transformOptions = {
            'presets': ["es2015", "react"],
            'plugins': ["transform-inline-environment-variables", "transform-remove-console", "transform-remove-debugger"]
        };
        bundler.transform("babelify", transformOptions).add(require.resolve("babel-polyfill"));
    }

    const stream = bundler.bundle()
        .on('error', function (err) {
            console.log(err.toString());
            this.emit("end");
        });

    gutil.log('Rebundle...');

    if (process.env.NODE_ENV === 'production') {
        stream
            .pipe(source(workFile.match(/([A-z0-9-_]*).js$/g)[0]))
            .pipe(gulp.dest(options.scripts.dest))
            .pipe(streamify(uglify()))
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest(options.scripts.dest));
    } else {
        stream
            .pipe(source(workFile.match(/([A-z0-9-_]*).js$/g)[0]))
            .pipe(gulp.dest(options.scripts.dest));
    }

    return stream;

}

gulp.task('js', function () {
    // Only run watchify if NOT production
    return buildScript(options.default_js_file, process.env.NODE_ENV === 'development');
});