'use strict';

var options = {

    default_js_file:'main.js',

    liverReload: true,

    scripts:{
        src: './assets/js/',
        dest:'./public/js',
        watch: './assets/js/**/*.js'
    },

    styles:{
        src: ['./assets/css/style.scss', './assets/css/pages/**/*.scss'],
        dest:'./public/css',
        watch: './assets/css/**/*.scss'
    },

    images:{
        src: './assets/images/**/*.+(jpeg|jpg|png|gif)',
        dest:'./public/images',
        svg_src:'./assets/images/**/*.svg'
    },

    markup:{
        src:'./assets/html/*.html',
        dest:'./public/html/',
        compiled: './public/html/*.html',
        watch:'./assets/html/**/*.html'
    },

    fonts:{
        src:'./assets/fonts/**/*',
        dest:'./public/fonts'
    },

    dist: './public/*',
    
};


module.exports = options;