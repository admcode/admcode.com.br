const
    gulp     = require('gulp'),
    jshint   = require('gulp-jshint'),
    concat   = require('gulp-concat'),
    uglify   = require('gulp-uglify'),
    rename   = require('gulp-rename'),
    minify   = require('gulp-minify-css')
    imagemin = require('gulp-imagemin');

gulp.task('images', () =>
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);

gulp.task('lint', function() {
    return gulp.src('src/js/{*.js,*/*.js}')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('css', function() {
    return gulp.src('src/css/*.css')
        .pipe(concat('styles.css'))
        .pipe(rename('styles.min.css'))
        .pipe(minify())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function() {
    gulp.watch('src/js/*.js', ['lint', 'scripts']);
    gulp.watch('src/css/*.css', ['css']);
});

gulp.task('default', ['lint', 'scripts', 'css', 'images']);
