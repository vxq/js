const fs = require('fs');

const gulp = require('gulp');
const closureCompiler = require('google-closure-compiler').gulp();


const flags = {
  closure_entry_point: 'vxq.main',
  compilation_level: 'ADVANCED_OPTIMIZATIONS',
  warning_level: 'VERBOSE',
  output_wrapper: '-function(){%output%}.call(window)',
  language_in: 'ECMASCRIPT6_TYPED',
  language_out: 'ECMASCRIPT5_STRICT',
  generate_exports: true,
  jscomp_error: ['checkTypes']
};


gulp.task('build', () => [
  gulp.src('vxq/*.js')
  .pipe(closureCompiler(Object.assign({}, flags, {
    js_output_file: 'compiled.js'
  })))
  .pipe(gulp.dest('dist')),

  gulp.src('vxq/*.js')
  .pipe(closureCompiler(Object.assign({}, flags, {
    js_output_file: 'debug.js',
    debug: true,
    formatting: 'pretty_print'
  })))
  .pipe(gulp.dest('dist'))
]);
