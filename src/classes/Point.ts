import { UNIT } from '../constants/constants';
import { Base } from './Base';

export class Point extends Base {
  public x: number;
  public y: number;

  constructor(x: number, y: number, ctx: CanvasRenderingContext2D) {
    super(ctx);
    this.x = UNIT * x;
    this.y = UNIT * y * -1;

    this.draw();
  }

  public draw(): void {
    const circle = new Path2D();
    circle.arc(this.x, this.y, 3, 0, 2 * Math.PI);

    this.ctx.fill(circle);
  }
}
