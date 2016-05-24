TBD
===

  [github]:        https://github.com/vxq/js.git
  [gitlab]:        https://gitlab.com/vxq/js.git
  [bitbucket]:     https://bitbucket.org/vxq/js.git
  [npm]:           https://www.npmjs.com/package/vxq

  [travis]:        https://travis-ci.org/vxq/js/branches
  [dep-monitor]:   https://gemnasium.com/github.com/vxq/js
  
  [examples.gh]:   https://vxq.github.io/js/examples/
  [examples.gl]:   https://vxq.gitlab.io/js/examples/
  
  [local-example]: examples/index.html

[![vxq/js on github (code and issues)](https://img.shields.io/github/commits-since/vxq/js/9468d4c1.svg?label=vxq/js+on+github)][github]
[![and on gitlab (code)](https://img.shields.io/badge/&-gitlab-grey.png)][gitlab]
[![and on bitbucket (code)](https://img.shields.io/badge/&-bitbucket-grey.png)][bitbucket]
[![and vxq on npm (package manager)](https://img.shields.io/npm/v/vxq.svg?label=vxq+on+npm)][npm]
[![and on travis (continuous integration)](https://img.shields.io/travis/vxq/js/master.svg?label=travis)][travis]
[![and on gemnasium (dependency monitor)](https://img.shields.io/gemnasium/vxq/js.svg)][dep-monitor]

Examples
--------

- [Browser-only examples from latest (pre)release][examples.gh]
  ([mirror][examples.gl]).

Developing
----------

After `npm install` you can `gulp watch-simple` then make changes in `vxq/` and
observe the results in [`examples/index.html`][local-example].

You should run `scripts/pre-commit` before sending a pull request, but at least
run `rm -rf dist/` to avoid merging in stale data.
