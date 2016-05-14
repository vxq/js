const gulp = require('gulp');
const merge2 = require('merge2');
const ts = require('gulp-typescript');


exports.defineTasks = (inRoot, outRoot) => {
  const BUILD_TASK = 'build-typescript';
  const cwd = inRoot;
  const srcs = [
    `**.js`,
    `**.ts`,
    `!**.externs.*`,
  ];
  const dest = `${outRoot}/typed`;

  gulp.task(BUILD_TASK, () => {
    const tsResult = gulp.src(srcs, {cwd}).pipe(
      ts({
        "target": "es6",
        "noImplicitAny": false,
        "sourceMap": true,
        "allowJs": true
      }));

    return merge2([
      tsResult.dts.pipe(gulp.dest(`${dest}/d`)),
      tsResult.js.pipe(gulp.dest(dest))
    ]);
  });

  return BUILD_TASK;
};
