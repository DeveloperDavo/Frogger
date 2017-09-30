var gulp = require('gulp');
var jasmineBrowser = require('gulp-jasmine-browser');

gulp.task('test', function() {
    return gulp.src(['spec/*[sS]pec.js', 'js/**'])
        .pipe(jasmineBrowser.specRunner())
        .pipe(jasmineBrowser.server({port: 8888}));
});