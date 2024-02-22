import { Algorithm } from './classes/Algorithm';
import { CartesianPlane } from './classes/CartesianPlane';
import { Point } from './classes/Point';

export function setupCanvas(element: HTMLCanvasElement) {
  const ctx = element.getContext('2d');

  const canvasWidth = element.width;
  const canvasHeight = element.height;

  if (ctx) {
    ctx.translate(canvasWidth / 2, canvasHeight / 2);

    new CartesianPlane(canvasWidth, canvasHeight, ctx);

    const point1 = new Point(0, 0, ctx);
    const point2 = new Point(5, 5, ctx);

    new Algorithm(ctx, point1, point2);
  }
}
