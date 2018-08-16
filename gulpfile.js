var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
var uglify = require('gulp-uglify-es').default;
gulp.task('sass', function() {
  return gulp
    .src(['app/styles/reset.css', 'app/styles/style.scss'])
    .pipe(concat('style.css'))
    .pipe(sass())
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'));
});
gulp.task('js', function() {
  return gulp
    .src('app/js/script.js') // * for all the js things
    .pipe(uglify())
    .on('error', function(err) {
      gutil.log(gutil.colors.red('[Error]'), err.toString());
    })
    .pipe(gulp.dest('dist'));
});
// gulp.task('js', function() {
//   return gulp
//     .src(['app/js/plugins/*.js', 'app/js/*.js'])
//     .pipe(concat('all.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('dist'));
// });

gulp.task('watch', function() {
  gulp.watch('app/*.scss', ['sass']);
  gulp.watch('app/js/**/*.js', ['js']);
});

gulp.task('default', ['sass', 'js', 'watch']);
