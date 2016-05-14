const gulp = require('gulp');


const inRoot = 'vxq';
const outRoot = 'dist';

const buildClosure = require('./gulp/closure').defineTasks(inRoot, outRoot);
const buildTypescript = require('./gulp/typescript').defineTasks(inRoot, outRoot);

gulp.task('build', [buildClosure, buildTypescript]);
