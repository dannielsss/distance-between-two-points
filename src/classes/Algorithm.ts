import { UNIT } from '../constants/constants';
import { Point } from './Point';
import { Base } from './Base';

export class Algorithm extends Base {
  private point1: Point;
  private point2: Point;

  constructor(ctx: CanvasRenderingContext2D, point1: Point, point2: Point) {
    super(ctx);
    this.point1 = point1;
    this.point2 = point2;

    this.draw();
  }

  public draw(): void {
    this.ctx.strokeStyle = '#ffffff';
    this.ctx.beginPath();
    this.ctx.moveTo(this.point2.x, this.point2.y);
    this.ctx.lineTo(this.point1.x, this.point1.y);
    this.ctx.closePath();
    this.ctx.stroke();

    this.drawText();
  }

  private drawText(): void {
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = '12px serif';
    this.ctx.fillText(
      `d = ${this.calculateDistance()}u`,
      this.point1.x + UNIT,
      this.point2.y + UNIT
    );
  }

  private calculateDistance(): number {
    return Math.sqrt(
      Math.pow(this.point2.x - this.point1.x, 2) +
        Math.pow(this.point2.y - this.point1.y, 2)
    );
  }
}
