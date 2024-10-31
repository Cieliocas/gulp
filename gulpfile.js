const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function comprimeImagens() {
    return gulp.src('./source/images/*')
    .pipe(imagemin()) // Minifica imagens
    .pipe(gulp.dest('./build/images')); // destino imagens
}

function comprimeJavascript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify()) // Minifica o código
        .pipe(obfuscate()) // torna codigo ilegivel
        .pipe(gulp.dest('./build/scripts')); // destino código
}

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
    .pipe(sourcemaps.init()) // Inicia o sourcemap
        .pipe(sass({
            outputStyle: 'compressed' // O output será minificado
        }))
        .pipe(sourcemaps.write('./maps')) // Inicia
        .pipe(gulp.dest('./build/styles'));
}
exports.default = function() {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(comprimeJavascript));
    gulp.watch('./source/images/', { ignoreInitial: false }, gulp.series(comprimeImagens));
}