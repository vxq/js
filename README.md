`vxq/js#goto` branch
====================

Brainstorming
-------------

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

When you click, it selects the nearest controllable unit. (Maybe it's time to
superclass agent into Unit or Sprite or something.) If you click and drag, a
rectangle is visible, and you select all units which are the closest unit to
any point in that rectangle.

Maybe while you have your mouse held down a set of outlines are drawn showing
areas to which each unit is closest, where they would be selected. It would be
a unique visual element... but it could be too distracting.

.

The purpose of this branch is to implement `flatland.Units`'s `.goTo()` method

The purpose of this branch is to implement the .goTo() method for
`flatland.Units`, allowing them to thrust their way towards a target.
`FlatCanvasRenderer` will need to gain the ability to accept clicks to order
some unit around. Initially we may simply use the first unit -- and highlight
it in green. We may also want to extend the `VXQ.Agent` interface with an array
of known waypoints.

Instead of having opaque changed promises, we may want the waypoint system to
be transparent, and support the replace/append operations like in an RST game.

Hmm. I could consider putting this entirely in the UI layer, and not exposing it
in the public interface, so all of the queueing is portable between games. It
would need to listen for changes or poll, then issue subsequent commands when
appropriate.

This means I wouldn't be able to use the logic for NPCs in flatland, but that
may be of secondary value.

Okay, how about dialing this back one notch: it should be setting the
destination, not the direction, because any otherwise it requires pathfinding
in the ui when the common interface doesn't have enough information to do that.
We'll retain the concept of the promises that cancel when the destination is
reached, but not implement any other queuing there. Issuing a new goTo will
cancel one that's already in progress.

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
