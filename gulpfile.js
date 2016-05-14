const gulp = require('gulp');


const inRoot = 'vxq';
const outRoot = 'dist';
const excludeClosureExterns = [
    `!${inRoot}/**/closure-externs/*`,
    `!${inRoot}/**.externs.js`
];
const excludeFlowDeclarations = [
    `!${inRoot}/**/flow-declarations/*`,
];
const excludeTypescriptDs = [
    `!${inRoot}/**/typescript-ds/*`,
    `!${inRoot}/**.d.ts`,
    `!${inRoot}/**.d.js`,
];


const buildClosure = require('./gulp/closure').defineTasks(inRoot, outRoot, [
    ...excludeFlowDeclarations, ...excludeTypescriptDs]);
const buildTypescript = require('./gulp/typescript').defineTasks(inRoot, outRoot, [
    ...excludeClosureExterns, ...excludeFlowDeclarations]);
const buildFlow = require('./gulp/flow').defineTasks(inRoot, outRoot, [
    ...excludeClosureExterns, ...excludeTypescriptDs]);

gulp.task('build', [buildClosure, buildTypescript, buildFlow]);



