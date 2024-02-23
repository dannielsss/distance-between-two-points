import { Algorithm } from './classes/Algorithm';
import { CartesianPlane } from './classes/CartesianPlane';
import { Point } from './classes/Point';
import { UNIT } from './constants/constants';

export function setupCanvas(
  element: HTMLCanvasElement,
  posX1: HTMLInputElement,
  posY1: HTMLInputElement,

  posX2: HTMLInputElement,
  posY2: HTMLInputElement
) {
  const ctx = element.getContext('2d');

  const canvasWidth = element.width;
  const canvasHeight = element.height;

  if (ctx) {
    ctx.translate(canvasWidth / 2, canvasHeight / 2);

    const cartesianPlane = new CartesianPlane(canvasWidth, canvasHeight, ctx);

    const point1 = new Point(0, 0, ctx);
    const point2 = new Point(0, 0, ctx);

    const algorithm = new Algorithm(ctx, point1, point2);

    const draw = () => {
      ctx.clearRect(
        -canvasWidth / 2,
        -canvasHeight / 2,
        canvasWidth,
        canvasHeight
      );

      cartesianPlane.draw();
      algorithm.draw();
      point1.draw();
      point2.draw();
    };

    posX1.addEventListener('input', () => {
      point1.x = parseFloat(posX1.value) * UNIT;
      draw();
    });

    posY1.addEventListener('input', () => {
      point1.y = parseFloat(posY1.value) * UNIT * -1;
      draw();
    });

    posX2.addEventListener('input', () => {
      point2.x = parseFloat(posX2.value) * UNIT;
      draw();
    });

    posY2.addEventListener('input', () => {
      point2.y = parseFloat(posY2.value) * UNIT * -1;
      draw();
    });
  }
}
