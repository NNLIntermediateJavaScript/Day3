// grab our packages
var gulp   = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify');
var srcJS = 'public_html/Complete/**/*.js',
    destJS = 'prod';
    
// define the default task and add the watch task to it
gulp.task('default', ['watch']);

// configure the jshint task
gulp.task('jshint', function() {
  return gulp.src(srcJS)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('uglify', ['jshint'], function() {
  return gulp.src(srcJS)
    .pipe(uglify())
    .pipe(gulp.dest(destJS));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  gulp.watch(srcJS, ['uglify']);
});