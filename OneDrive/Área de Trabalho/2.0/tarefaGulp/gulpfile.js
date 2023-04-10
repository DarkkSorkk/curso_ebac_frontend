const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Compilar Sass
gulp.task('sass', () => {
    return gulp
    .src('src/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('build/css'));
});

// Comprimir imagens
gulp.task('imagemin', () => {
    return gulp
    .src('src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/images'));
});

// Minificar JavaScript
gulp.task('uglify', () => {
    return gulp
    .src('src/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

// Tarefa padrão
gulp.task('default', gulp.series('sass', 'imagemin', 'uglify'));
