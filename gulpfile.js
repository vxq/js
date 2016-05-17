const gulp = require('gulp');
const closureCompiler = require('google-closure-compiler').gulp();
const runSequence = require('run-sequence');


const srcs = [
  '!**/*.externs.js',
  'vxq/**/*.js',
];
const dest = 'zdist';

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
  jscomp_error: ['checkTypes', 'missingReturn'],
  jscomp_warning: [],
  externs: [
    'vxq/public.externs.js',
    'vxq/environment.externs.js'
  ]
};

gulp.task('pbuild', ['build-simple', 'build-debug', 'build-prod']);
gulp.task('build', () => runSequence('build-simple', 'build-debug', 'build-prod'));


gulp.task('build-simple', () => {
  gulp.src(srcs).pipe(closureCompiler(Object.assign({}, flags, {
    compilation_level: 'SIMPLE_OPTIMIZATIONS',
    js_output_file: 'simple.js',
    jscomp_error: [],
    jscomp_warning: [].concat(flags.jscomp_warning, flags.jscomp_error),
    formatting: 'pretty_print',
    debug: true,
    define: ['vxq.debug.DEBUG=true']
  }))).pipe(gulp.dest(dest));
});

gulp.task('build-debug', () =>
  gulp.src(srcs).pipe(closureCompiler(Object.assign({}, flags, {
    js_output_file: 'debug.js',
    formatting: 'pretty_print',
    debug: true,
    define: ['vxq.debug.DEBUG=true']
  }))).pipe(gulp.dest(dest)));

gulp.task('build-prod', () =>
  gulp.src(srcs).pipe(closureCompiler(Object.assign({}, flags, {
    js_output_file: 'prod.js'
  }))).pipe(gulp.dest(dest)));

gulp.task('lint', () =>
  // Runs prod build, but with lint checks and all warnings turned to errors,
  // and discarding the output files.
  gulp.src(srcs).pipe(closureCompiler(Object.assign({}, flags, {
    // We need to have an output path, but don't want to save this
    // (it should be identical to prod.js anyway), so we put it here.
    js_output_file: 'tmp/prod-linted.js',
    jscomp_error:
        ['lintChecks'].concat(flags.jscomp_warning, flags.jscomp_error),
    jscomp_warning: []
  }))).pipe(gulp.dest(dest)));
