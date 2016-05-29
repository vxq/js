TBD
===

  [github]:    https://github.com/vxq/js.git
  [gitlab]:    https://gitlab.com/vxq/js.git
  [bitbucket]: https://bitbucket.org/vxq/js.git
  [npm]:       https://www.npmjs.com/package/vxq

  [travis]:      https://travis-ci.org/vxq/js/branches
  [dep-monitor]: https://gemnasium.com/github.com/vxq/js
  
  [online-example]: https://vxq.gitlab.io/js/examples/
  [local-example]:  examples/index.html

[![vxq/js on GitHub](https://img.shields.io/github/commits-since/vxq/js/9468d4c1.svg?label=vxq/js+on+github)][github]
[![vxq/js on GitLab](https://img.shields.io/badge/&-gitlab-grey.png)][gitlab]
[![vxq/js on BitBucket](https://img.shields.io/badge/&-bitbucket-grey.png)][bitbucket]
[![vxq on npm](https://img.shields.io/npm/v/vxq.svg?label=vxq+on+npm)][npm]
[![Travis CI](https://img.shields.io/travis/vxq/js/master.svg?label=travis)][travis]
[![Dependency monitor](https://img.shields.io/gemnasium/vxq/js.svg)][dep-monitor]

Examples
--------

- [Browser-only example from latest (pre)release][online-example].

Developing
----------

After `npm install` you can `gulp watch-simple` then make changes in `vxq/` and
observe the results in [`examples/index.html`][local-example].

You should ideally run `scripts/pre-commit` before sending a pull request, but
if not then at least `rm -rf dist/` to avoid stale data.
