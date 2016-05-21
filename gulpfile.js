const gulp = require('gulp');
const closureCompiler = require('google-closure-compiler').gulp();
const runSequence = require('run-sequence');


const srcs = [
  '!**/*.externs.js',
  'vxq/**/*.js'
];
const dest = 'zdist';

const flags = {
  compilation_level: 'ADVANCED_OPTIMIZATIONS',
  use_types_for_optimization: true,
  warning_level: 'VERBOSE',
  get output_wrapper() {
    return [
      `-function(window, module) {\n`,
        `%output%\n`,
      `}.call(`,
          `typeof window == 'object' ? window`,
            `: typeof this == 'object' ? this`,
            `: null,`,
          `typeof window == 'object' ? window : null,`,
          `typeof module == 'object' ? module : {}`,
      `)`
    ].join('');
  },
  language_in: 'ECMASCRIPT6_STRICT',
  language_out: 'ECMASCRIPT5_STRICT',
  entry_point: 'vxq.main',
  jscomp_error: [
    'checkTypes', 'missingReturn', 'checkVars', 'missingProvide',
    'missingRequire', 'missingProperties'
  ],
  jscomp_warning: [
    'accessControls', 'undefinedVars', 'undefinedNames', 'visibility',
    'externsValidation'
  ],
  externs: [
    'vxq/public.externs.js',
    'vxq/environment.externs.js'
  ]
};
const lintFlags = [
    'lintChecks', 'fileoverviewTags', 'nonStandardJsDocs', 'suspiciousCode',
    'deprecated'
];

gulp.task('pbuild', ['build-simple', 'build-debug', 'build-prod']);
gulp.task('build', () => runSequence('build-simple', 'build-debug', 'build-prod'));

gulp.task('build-simple', () =>
  gulp.src(srcs).pipe(closureCompiler(Object.assign({}, flags, {
    compilation_level: 'SIMPLE_OPTIMIZATIONS',
    use_types_for_optimization: false,
    js_output_file: 'simple/vxq.js',
    output_manifest: 'zdist/simple/vxq.manifest',
    jscomp_error: [],
    jscomp_warning: [].concat(flags.jscomp_warning, flags.jscomp_error),
    formatting: 'pretty_print',
    debug: true,
    define: ['vxq.D.DEBUG=true']
  }))).pipe(gulp.dest(dest)));

gulp.task('build-debug', () =>
  gulp.src(srcs).pipe(closureCompiler(Object.assign({}, flags, {
    js_output_file: 'debug/vxq.js',
    output_manifest: 'zdist/debug/vxq.manifest',
    formatting: 'pretty_print',
    debug: true,
    define: ['vxq.D.DEBUG=true']
  }))).pipe(gulp.dest(dest)));

gulp.task('build-prod', () =>
  gulp.src(srcs).pipe(closureCompiler(Object.assign({}, flags, {
    js_output_file: 'prod/vxq.js'
  }))).pipe(gulp.dest(dest)));

gulp.task('lint', () =>
  // Runs prod build, but with lint checks and all warnings turned to errors,
  // and discarding the output files.
  gulp.src(srcs).pipe(closureCompiler(Object.assign({}, flags, {
    // We need to have an output path, but don't want to save this
    // (it should be identical to prod.js anyway), so we put it here.
    js_output_file: 'tmp/prod/vxq.js',
    jscomp_error: [].concat(
        lintFlags, flags.jscomp_warning, flags.jscomp_error),
    jscomp_warning: []
  }))).pipe(gulp.dest(dest)));
