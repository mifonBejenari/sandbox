var gulp    = require('gulp');
var sass    = require('gulp-sass');
var cssmin  = require('gulp-cssmin');
var twig	= require('gulp-twig');
var rename  = require('gulp-rename');

// gulp.task sass compile to css
gulp.task('sass', function() {
	return gulp.src('styles/scss/style.scss')
		.pipe(sass())
		.pipe(gulp.dest("styles/css"))
});

// minify css
gulp.task('cssmin', function() {
	gulp.src('styles/css/style.css')
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('styles/css'))
});

// convert twig to html
gulp.task('ctwig', function() {
	return gulp.src('templates/index.twig')
		.pipe(twig({
			data: {}
		}))
		.pipe(gulp.dest('./'));
});

// gulp.task watcher compile sass to css, twig to html, minified css
gulp.task('watch', ['sass', 'cssmin', 'ctwig'], function() {
	gulp.watch('styles/scss/**/*.scss', ['sass']);
	gulp.watch('styles/css/style.css', ['cssmin']);
	gulp.watch('templates/**/*.twig', ['ctwig']);
});

gulp.task('default', ['watch']);
