export function setupCanvas(element: HTMLCanvasElement) {
  const ctx = element.getContext('2d');

  if (ctx) {
    ctx.fillRect(25, 25, 300, 100);
  }
}
