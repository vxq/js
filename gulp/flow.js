const gulp = require('gulp');
const flow = require('gulp-flowtype');


exports.defineTasks = (inRoot, outRoot, extraSrcs) => {
  const BUILD_TASK = 'build-flow';
  const srcs = [
    `${inRoot}/**.js`,
    `${inRoot}/**.ts`,
    `!${inRoot}/**/flow-declarations/*`,
    ...extraSrcs
  ];
  const dest = `${outRoot}/flowed`;

  gulp.task(BUILD_TASK, () =>
    gulp.src(srcs).pipe(flow({
        abort: true,
        all: true,
        killFlow: true
    })).pipe(gulp.dest(dest)));

  return BUILD_TASK;
};
