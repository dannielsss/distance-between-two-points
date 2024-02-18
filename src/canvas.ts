class Plane {
  private ctx: CanvasRenderingContext2D;

  constructor(
    width: number,
    height: number,
    unit: number,
    ctx: CanvasRenderingContext2D
  ) {
    this.ctx = ctx;

    this.drawLine(-width / 2, 0);
    this.drawLine(height / 2, 0);

    this.drawLine(0, height / 2);
    this.drawLine(0, -height / 2);

    const linesCount = 13;
    for (let i = 1; i < linesCount; i++) {
      this.drawNumber(unit * i, -5, 2, 10, i, unit * i - 2, 20); // 'x' positive
      this.drawNumber(-unit * i, -5, 2, 10, -i, -unit * i - 2, 20); // 'x' negative

      this.drawNumber(-5, -unit * i, 10, 2, i, 7, -unit * i + 4); // 'y' positive
      this.drawNumber(-5, unit * i, 10, 2, -i, 7, unit * i + 4); // 'y' negative
    }
  }

  private drawLine(width: number, height: number) {
    this.ctx.strokeStyle = '#000000';

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
  ) {
    this.ctx.fillRect(x, y, width, height);

    this.ctx.font = '12px serif';
    this.ctx.fillText(`${text}`, textX, textY);
  }
}

class Point {
  public x: number;
  public y: number;

  constructor(
    x: number,
    y: number,
    unit: number,
    ctx: CanvasRenderingContext2D
  ) {
    this.x = unit * x;
    this.y = unit * y * -1;

    ctx.fillRect(this.x - 2, this.y - 3, 5, 5);
  }
}

export function setupCanvas(element: HTMLCanvasElement) {
  const ctx = element.getContext('2d');

  const canvasWidth = element.width;
  const canvasHeight = element.height;

  if (ctx) {
    ctx.translate(canvasWidth / 2, canvasHeight / 2);

    new Plane(canvasWidth, canvasHeight, 20, ctx);

    const point1 = new Point(-10, -10, 20, ctx);
    const point2 = new Point(12, 10, 20, ctx);

    ctx.beginPath();
    ctx.moveTo(point2.x, point2.y);
    ctx.lineTo(point1.x, point1.y);
    ctx.closePath();
    ctx.stroke();

    const d = Math.sqrt(
      Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2)
    );

    ctx.font = '12px serif';
    ctx.fillText(`d = ${d}u`, point1.x + 20, point2.y + 20);
  }
}
