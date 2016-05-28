`vxq/js#goto` branch
====================


`VXQ.Agent::goTo(destination:!VXQ.Vector3D):!Promise<void>`
----

Returns a promise that is resolved when the agent reaches the destination, or
is rejected this command is cancelled by another or fails.


RTS-style waypointing in `vxq.uis.FlatCanvas`
----

This is going in the UI layer so it can be used with any game without requiring
them/their libraries to reimplement waypointing. Interoperability with games'
own waypointing systems might be something to consider in the future, but
definitely not yet.

Starcraft will be a model, and the visuals might be vaguely similar.

### Brainstorming

- Default Left Click - Select Unit
- Right Click - Move to Location
- M, Left Click - Move to Location
- H, Left Click - Hold position permanently.
- W, Left Click - Hold position until another unit comes within TBD.
  (Useful for delaying other commands.)
- F, Left Click - Hold position until another unit comes within TBD, then
  follows it at a distance of TBD.

By default, issuing a command to a unit cancels and replaces any active or
queued commands.

Holding down SHIFT appends to the queue.

Holding down CONTROL pauses the current action, prepends it to the queue, and
begins executing the new action.


Unit territory layer in `vxq.uis.FlatCanvas`
---

Overlay borders around the "territory" of each unit, defined as territory to
which that is the nearest unit. Allow you to click/drag anywhere in a unit's
territory to select that unit.

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
