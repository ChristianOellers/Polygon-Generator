/**
 * Clear screen.
 */
function clear(canvas, ctx) {
  'use strict';

  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
}
