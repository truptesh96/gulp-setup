const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');


// Compile Sass task
 gulp.task('sass', function () {
  return gulp.src('src/scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('dist/css/'));
});
 

// Minify JavaScript task
gulp.task('js', function() {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});


// Watch task to monitor file changes
gulp.task('watch', function() {
  gulp.watch('src/scss/*.scss', gulp.series('sass'));
  gulp.watch('src/js/*.js', gulp.series('js'));
});

// Default task
gulp.task('default', gulp.parallel('sass', 'js', 'watch'));
