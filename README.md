`vxq/js#typescript-tests` branch
================================

The purpose of this branch is to add TypeScript versions of the public Closure
interfaces and add tests written in TypeScript exercising the compiled code.
The TypeScript `.d.ts` interface files *may* need to be written by hand (in
which case the tests will need to be comprehensive) but hopefully it will be
possible to find (or write) an automated tool that can handle our relatively
simple cases.


Alternatives Considered
-----------------------

Another possibility originally considered (see ancestor b9c17226be) was to write
all of this module's code in mutually-compatible subsets of TypeScript and
Closure's similar `ECMASCRIPT6_TYPED` syntax (and perhaps *also* Flow). However,
this was found to be unfeasible at this time. It may be worth reinvestigating in
a year or two.

---

<!-- end of branch section -->

---



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
