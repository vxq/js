const gulp = require('gulp');
const closureCompiler = require('google-closure-compiler').gulp();
const gjslint = require('gulp-gjslint');
const runSequence = require('run-sequence');


const srcs = [
  '!**/*.externs.js',
  'vxq/**/*.js'
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
  jscomp_error: ['checkTypes', 'missingReturn'],
  externs: [
    'vxq/public.externs.js',
    'vxq/environment.externs.js'
  ]
};

gulp.task('build', () => runSequence('build-simple', 'build-debug', 'build-prod'));

gulp.task('build-simple', () =>
  gulp.src(srcs).pipe(closureCompiler(Object.assign({}, flags, {
    compilation_level: 'SIMPLE_OPTIMIZATIONS',
    js_output_file: 'simple.js',
    jscomp_warning: ['checkTypes'],
    jscomp_error: [],
    debug: true,
    formatting: 'pretty_print',
    define: ['vxq.debug.DEBUG=true']
  }))).pipe(gulp.dest('zdist')));

gulp.task('build-debug', () =>
  gulp.src(srcs).pipe(closureCompiler(Object.assign({}, flags, {
    js_output_file: 'debug.js',
    debug: true,
    formatting: 'pretty_print',
    define: ['vxq.debug.DEBUG=true']
  }))).pipe(gulp.dest('zdist')));

gulp.task('build-prod', () =>
  gulp.src(srcs).pipe(closureCompiler(Object.assign({}, flags, {
    js_output_file: 'prod.js'
  }))).pipe(gulp.dest('zdist')));

gulp.task('lint', () =>
  gulp.src('vxq/**/*.js')
    .pipe(gjslint())
    .pipe(gjslint.reporter('console'))
    .pipe(gjslint.reporter('fail')));

gulp.task('lint-full', () =>
  gulp.src('vxq/**/*.js')
    .pipe(gjslint())
    .pipe(gjslint.reporter('console')));
