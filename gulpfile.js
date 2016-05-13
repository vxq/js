const fs = require('fs');

const gulp = require('gulp');
const closureCompiler = require('google-closure-compiler').gulp();
const ts = require('gulp-typescript');


gulp.task('build', ['build-closure', 'build-typescript']);

(closure => {
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
  const src = () => gulp.src(['vxq/**/*.ts', 'vxq/**/*.js']);
  const dest = () => gulp.dest('dist/closed');

  gulp.task('build-closure', ['build-closure-prod', 'build-closure-debug']);

  gulp.task('build-closure-prod', () =>
    src().pipe(closureCompiler(Object.assign({}, flags, {
      js_output_file: 'prod.js'
    }))).pipe(dest()));

  gulp.task('build-closure-debug', () =>
    src().pipe(closureCompiler(Object.assign({}, flags, {
      js_output_file: 'debug.js',
      debug: true,
      formatting: 'pretty_print'
    }))).pipe(dest()));
})();

(typescript => {
  const src = () => gulp.src(['vxq/**/*.ts']);
  const project = ts.createProject('tsconfig.json');
  const dest = () => gulp.dest('dist/typed');

  gulp.task('build-typescript', () => src().pipe(ts(project)).pipe(dest()));
})();


