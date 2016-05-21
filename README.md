# `vxq/js#typescript-tests`

The purpose of this branch is to add TypeScript versions of the public Closure
interfaces and add tests written in TypeScript exercising the compiled code.
The TypeScript `.d.ts` interface files *may* need to be written by hand (in
which case the tests will need to be comprehensive) but hopefully it will be
possible to find (or write) an automated tool that can handle our relatively
simple cases.

## Alternatives Considered

Another possibility originally considered (see ancestor b9c17226be) was to write
all of this module's code in mutually-compatible subsets of TypeScript and
Closure's similar `ECMASCRIPT6_TYPED` syntax (and perhaps *also* Flow). However,
this was found to be unfeasible at this time. It may be worth reinvestigating in
a year or two.

---

# [![vxq/js on github (code and issues)](https://img.shields.io/github/commits-since/vxq/js/9468d4c1.svg?label=vxq/js+on+github)](https://github.com/vxq/js) [![and vxq on npm (package manager)](https://img.shields.io/npm/v/vxq.svg?label=vxq+on+npm)](https://www.npmjs.com/package/vxq) [![and on travis (continuous integration)](https://img.shields.io/travis/vxq/js/master.svg?label=travis)](https://travis-ci.org/vxq/js/branches) [![and on gemnasium (dependency monitor)](https://img.shields.io/gemnasium/vxq/js.svg)](https://gemnasium.com/github.com/vxq/js)

TBD. A sketch.

## Examples

- [Limited in-browser examples from latest (pre)release](http://vxq.github.io/js/examples/).

## Contributing

You should run `scripts/pre-commit` before sending a pull request, but at least
run `rm -rf dist/` to avoid merging in stale data.
