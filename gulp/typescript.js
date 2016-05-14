const gulp = require('gulp');
const merge2 = require('merge2');
const ts = require('gulp-typescript');


exports.defineTasks = (inRoot, outRoot, extraSrcs) => {
  const BUILD_TASK = 'build-typescript';
  const srcs = [
    `${inRoot}/**.js`,
    `${inRoot}/**.ts`,
    ...extraSrcs
  ];
  const dest = `${outRoot}/typed`;

  gulp.task(BUILD_TASK, () => {
    const tsResult = gulp.src(srcs).pipe(
      ts(ts.createProject('tsconfig.json')));

    return merge2([
      tsResult.dts.pipe(gulp.dest(`${dest}/d`)),
      tsResult.js.pipe(gulp.dest(dest))
    ]);
  });

  return BUILD_TASK;
};
