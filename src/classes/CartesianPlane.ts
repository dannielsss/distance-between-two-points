import { UNIT } from '../constants/constants';
import { Base } from './Base';

export class CartesianPlane extends Base {
  width: number;
  height: number;

  constructor(width: number, height: number, ctx: CanvasRenderingContext2D) {
    super(ctx);
    this.width = width;
    this.height = height;

    this.draw();
  }

  public draw(): void {
    // Draw four lines: 'x' '-x' 'y' '-y'
    this.drawLine(-this.width, 0);
    this.drawLine(this.width, 0);

    this.drawLine(0, this.height);
    this.drawLine(0, -this.height);

    // Draw numbers
    const numbersCount = 13;
    for (let i = 1; i < numbersCount; i++) {
      this.drawNumber(UNIT * i, -5, 2, 10, i, UNIT * i - 2, 20); // 'x' positive
      this.drawNumber(-UNIT * i, -5, 2, 10, -i, -UNIT * i - 2, 20); // 'x' negative

      this.drawNumber(-5, -UNIT * i, 10, 2, i, 7, -UNIT * i + 4); // 'y' positive
      this.drawNumber(-5, UNIT * i, 10, 2, -i, 7, UNIT * i + 4); // 'y' negative
    }
  }

  private drawLine(width: number, height: number): void {
    this.ctx.strokeStyle = '#ffffff59';

    this.ctx.beginPath();
    this.ctx.moveTo(width, height);
    this.ctx.lineTo(0, 0);
    this.ctx.closePath();
    this.ctx.stroke();
  }

  private drawNumber(
    x: number,
    y: number,
    width: number,
    height: number,
    text: number,
    textX: number,
    textY: number
  ): void {
    this.ctx.fillStyle = '#ffffff59';
    this.ctx.fillRect(x, y, width, height);

    this.ctx.font = '12px serif';
    this.ctx.fillText(`${text}`, textX, textY);
  }
}
