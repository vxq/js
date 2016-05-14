const fs = require('fs');

const gulp = require('gulp');
const merge = require('merge2');
const closureCompiler = require('google-closure-compiler').gulp();
const ts = require('gulp-typescript');
const flow = require('gulp-flowtype');


gulp.task('build', ['build-closure', 'build-typescript', 'build-flow']);

const typescripts = [
    'vxq/**.ts',
];
const javascripts = [
    'vxq/**.js',
];
const excludeSeperateDefinitions = [
    '!vxq/**/closure-externs/*',
    '!vxq/**/flow-declarations/*',
    '!vxq/**.externs.js'
];
const excludeAllDefinitions = [
    ...excludeSeperateDefinitions,
    '!vxq/**/typescript-ds/*',
    '!vxq/**.d.ts',
];

(__closure__ => {
  const flags = {
    closure_entry_point: 'vxq.main',
    compilation_level: 'ADVANCED_OPTIMIZATIONS',
    warning_level: 'VERBOSE',
    output_wrapper:
        `-function(window, module) {
          %output%
        }.call(
            typeof window == 'object' ? window
              : typeof this == 'object' ? this
              : null,
            typeof window == 'object' ? window : null,
            typeof module == 'object' ? module : {}
        )`,
    language_in: 'ECMASCRIPT6_TYPED',
    language_out: 'ECMASCRIPT5_STRICT',
    generate_exports: true,
    jscomp_error: ['checkTypes'],
    externs: ['vxq/closure-externs/index.js']
  };
  const src = () => gulp.src([
    ...typescripts,
    ...javascripts,
    ...excludeAllDefinitions
  ]);
  const dest = () => gulp.dest('dist/closed');

  gulp.task('build-closure', ['build-closure-prod', 'build-closure-debug']);

  gulp.task('build-closure-prod', ['build-closure-debug'], () =>
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

(__typescript__ => {
  gulp.task('build-typescript', () => {
    const tsResult = gulp.src([
      ...typescripts,
      ...javascripts,
      ...excludeSeperateDefinitions
    ]).pipe(ts(
        ts.createProject('tsconfig.json')
    ));

    return merge([
      tsResult.dts.pipe(gulp.dest('dist/typed/d')),
      tsResult.js.pipe(gulp.dest('dist/typed'))
    ]);
  });
})();

(__flow__ => {
  gulp.task('build-flow', () =>
    gulp.src([
        ...typescripts,
        ...excludeAllDefinitions
    ]).pipe(flow({
        abort: true,
        all: true,
        killFlow: true,
    })).pipe(gulp.dest(
        'dist/flowed'
    )));
})();



