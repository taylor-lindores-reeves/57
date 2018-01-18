const gulp = require('gulp');
      watch = require('gulp-watch');
      browserSync = require('browser-sync');
      reload = browserSync.reload;

require('./gulp/tasks/styles');

gulp.task('watch', ['sync'], function(){
    gulp.watch('./**/*.css', ['styles'], reload);
    gulp.watch('./**/*.html', reload);
});

gulp.task('sync', ['browser-sync'], function() {
    watch('**/*.css', function() {
        return gulp.src('./style.css')
            .pipe(browserSync.stream());
    });
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        open: false
    });
});
