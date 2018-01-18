const gulp = require("gulp");
	  concat = require('gulp-concat');
      cleanCss = require('gulp-clean-css');
      minify = require('gulp-minify');
	  postcss = require("gulp-postcss");
	  autoprefixer = require("autoprefixer");
	  nested = require('postcss-nested');
	  cssvars = require('postcss-simple-vars');
	  cssImport = require('postcss-import');
	  mixins = require('postcss-mixins');

gulp.task('styles', function(){
	return gulp.src('./style.css')
	.pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
	.pipe(gulp.dest('./'))
});