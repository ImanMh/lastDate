var gulp = require('gulp'),
    browserify = require('gulp-browserify');


gulp.task('jqueryPlugin', function() {
	// Single entry point to browserify 
	gulp.src('src/lastdate.jquery.js')
		.pipe(browserify({
		  debug : true
		}))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('subScripts', function() {
	// Single entry point to browserify 
	gulp.src('./src/modules/*.js')
		.pipe(browserify({
		  debug : true
		}))
		.pipe(gulp.dest('./dist/modules/'));
});

gulp.task('watchScripts', function () {
  gulp.watch(['test/*.test.js', 'src/**/*.js'], ['subScripts', 'jqueryPlugin']);
});
