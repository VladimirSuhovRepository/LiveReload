var gulp = require('gulp'),
    livereload = require('gulp-livereload');



gulp.task('default', function() {
  livereload.listen();
	  gulp.watch('./src/*.*', function(){
		   gulp.src('./src/*.*').pipe(livereload());
	}).on('change', livereload.changed);
});