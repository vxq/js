const gulp = require('gulp');
const closureCompiler = require('google-closure-compiler').gulp();


const srcs = [
  '!**/*.externs.js',
  'vxq/**/*.js',
  'node_modules/google-closure-library/closure/**/*.js',
  '!node_modules/google-closure-library/closure/**/*_test.js'
];

const flags = {
  compilation_level: 'ADVANCED_OPTIMIZATIONS',
  warning_level: 'VERBOSE',
  output_wrapper: [
    `-function(window, module) {\n`,
      `%output%`,
    `\n}.call(`,
        `typeof window == 'object' ? window`,
          `: typeof this == 'object' ? this`,
          `: null,`,
        `typeof window == 'object' ? window : null,`,
        `typeof module == 'object' ? module : {}`,
    `)`
  ].join(''),
  language_in: 'ECMASCRIPT6_STRICT',
  language_out: 'ECMASCRIPT5_STRICT',
  entry_point: 'vxq.main',
  generate_exports: true,
  jscomp_error: ['checkTypes'],
  externs: [
      'vxq/index.externs.js'
  ]
};

gulp.task('build', ['build-prod', 'build-debug'])

gulp.task('build-debug', () =>
  gulp.src(srcs).pipe(closureCompiler(Object.assign({}, flags, {
    js_output_file: 'debug.js',
    debug: true,
    formatting: 'pretty_print'
  }))).pipe(gulp.dest('dist')));

gulp.task('build-prod', ['build-debug'], () =>
  gulp.src(srcs).pipe(closureCompiler(Object.assign({}, flags, {
    js_output_file: 'prod.js'
  }))).pipe(gulp.dest('dist')));
