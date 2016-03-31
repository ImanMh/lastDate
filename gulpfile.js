var gulp = require('gulp'),
    browserify = require('gulp-browserify');


gulp.task('mainScript', function() {
	// Single entry point to browserify 
	gulp.src('src/main.js')
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
