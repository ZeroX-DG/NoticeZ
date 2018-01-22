var gulp = require('gulp');
var plumber = require('gulp-plumber');
var minify = require('gulp-minify');

var JS_SOURCE = 'src';
var JS_DEST = 'dist';
var JS_INPUT_FILE = 'NoticeZ.js';

gulp.task('scripts', function() {
  return gulp.src(JS_SOURCE + '/' + JS_INPUT_FILE)
    .pipe(plumber({
      errorHandler: function(error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(minify({
      ext:{
          src:'.js',
          min:'.min.js'
      },
    }))
    .pipe(gulp.dest(JS_DEST + '/'))
});
