var gulp       = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var browserify = require('browserify');
var babelify   = require('babelify');
var source     = require('vinyl-source-stream');

gulp.task("default", function () {
    return browserify({entries: 'assets/js/main.js', extensions: ['.js'], debug: true})
        .transform(babelify)
        .bundle()
        .pipe(source('scripts.js'))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("public/js/"));
});

gulp.task('scripts:w', function () {
    gulp.watch('assets/**/*.js', ['default']);
});
