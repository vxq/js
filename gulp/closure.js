const gulp = require('gulp');
const closureCompiler = require('google-closure-compiler').gulp();


exports.defineTasks = (inRoot, outRoot, extraSrcs) => {
  const BUILD_TASK = 'build-closure';
  const srcs = [
    `${inRoot}/**.js`,
    `${inRoot}/**.ts`,
    `!${inRoot}/**/closure-externs/*`,
    `!${inRoot}/**.externs.js`,
    ...extraSrcs
  ];
  const dest = `${outRoot}/closed`;

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
    language_in: 'ECMASCRIPT6_TYPED',
    language_out: 'ECMASCRIPT5_STRICT',
    generate_exports: true,
    jscomp_error: ['checkTypes'],
    externs: [`${inRoot}/closure-externs/index.js`],
    process_common_js_modules: true
  };

  gulp.task(BUILD_TASK, [`${BUILD_TASK}-prod`, `${BUILD_TASK}-debug`])

  gulp.task('build-closure-debug', () =>
    gulp.src(srcs).pipe(closureCompiler(Object.assign({}, flags, {
      js_output_file: 'debug.js',
      debug: true,
      formatting: 'pretty_print'
    }))).pipe(gulp.dest(dest)));

  gulp.task(`${BUILD_TASK}-prod`, [`${BUILD_TASK}-debug`], () =>
    gulp.src(srcs).pipe(closureCompiler(Object.assign({}, flags, {
      js_output_file: 'prod.js'
    }))).pipe(gulp.dest(dest)));

  return BUILD_TASK;
};
