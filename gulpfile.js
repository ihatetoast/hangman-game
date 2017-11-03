const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');



gulp.task('styles', ()=>{
 gulp.src('./assets/css/style.css')
 	.pipe(autoprefixer())
 	.pipe(gulp.dest('build'))
});
gulp.task('watch', ()=>{
	gulp.watch('./assets/css/style.css', ['styles'])
});

