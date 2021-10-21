const { watch, series, parallel, task, src, dest } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const gulpSass = require('gulp-sass');
const nodeSass = require('node-sass');
const sass = gulpSass(nodeSass);
const del = require('del');
const gulpEjsMonster = require('gulp-ejs-monster');
const beautify = require('gulp-beautify');
const cssbeautify = require('gulp-cssbeautify');
const gulpTypescript = require('gulp-typescript');
const server = require('gulp-webserver');
const safeImportant = require('postcss-safe-important');
const postcss = require('gulp-postcss');


// Gulp Tasks

// Clean up dist
const clean = function() {
    return del('dist/**/*')
}

// Assemble EJSs 
const ejsDemo = function() {
   return src('src/index.ejs')
    .pipe(gulpEjsMonster({}))
    .pipe(beautify.html({ indent_size: 4 }))
    .pipe(dest('dist'))
}

const ejsApp = function() {
    return src('src/app.ejs')
     .pipe(gulpEjsMonster({}))
     .pipe(beautify.html({ indent_size: 4 }))
     .pipe(dest('dist'))
 }
 


// Compile SASS
const scss = function() {
    return src('src/scss/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({ cascade: false }))
        .pipe(cssbeautify({
            indent: '  ',
            openbrace: 'separate-line',
            autosemicolon: true
        }))
        .pipe(postcss([safeImportant()]))
        .pipe(dest('dist'))
}

// Copy CSS
const css = function() {
    return src('src/css/*.css')
        .pipe(dest('dist'))
}

// Compile TS to ES5
const ts = function() {
    return src('src/ts/*.ts')
        .pipe(gulpTypescript({ 
            noImplicitAny: true,
            target: 'es2015',
            module: 'es2015'
        }))
        .pipe(dest('dist'))
}



// Bundle into one app
const runServer = function() {
    return src('dist')
        .pipe(server({
            livereload: true,
            open: true,
            port: 9001
        }));
}

exports.build = series(clean, parallel(ejsDemo, ejsApp, scss, css, ts), runServer);


