# `vxq/js#goto`

The purpose of this branch is to implement the .goTo() method for
`flatland.Units`, allowing them to thrust their way towards a target.
`FlatCanvasRenderer` will need to gain the ability to accept clicks to order
some unit around. Initially we may simply use the first unit -- and highlight
it in green. We may also want to extend the `VXQ.Agent` interface with an array
of known waypoints.

---

[![vxq/js on github (code and issues)](https://img.shields.io/github/commits-since/vxq/js/9468d4c1.svg?label=vxq/js+on+github)](https://github.com/vxq/js) [![and on gitlab (code)](https://img.shields.io/badge/gitlab-also-blue.png)](https://gitlab.com/vxq/js) [![and on bitbucket (code)](https://img.shields.io/badge/bitbucket-also-blue.png)](https://bitbucket.org/vxq/js) [![and vxq on npm (package manager)](https://img.shields.io/npm/v/vxq.svg?label=vxq+on+npm)](https://www.npmjs.com/package/vxq) [![and on travis (continuous integration)](https://img.shields.io/travis/vxq/js/master.svg?label=travis)](https://travis-ci.org/vxq/js/branches) [![and on gemnasium (dependency monitor)](https://img.shields.io/gemnasium/vxq/js.svg)](https://gemnasium.com/github.com/vxq/js)

---

TBD. A sketch.

## Examples

- [Limited in-browser examples from latest (pre)release](http://vxq.github.io/js/examples/).

## Developing

After `npm install` you can `gulp watch-simple` then make changes in `vxq/`
and observe the results in [`examples/index.html`](examples/index.html).

You should run `scripts/pre-commit` before sending a pull request, but at least
run `rm -rf dist/` to avoid merging in stale data.
