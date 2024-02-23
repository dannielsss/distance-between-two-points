import { setupCanvas } from './canvas';

import './style.css';

setupCanvas(
  document.querySelector<HTMLCanvasElement>('#canvas')!,
  document.querySelector<HTMLInputElement>('#posX1')!,
  document.querySelector<HTMLInputElement>('#posY1')!,
  document.querySelector<HTMLInputElement>('#posX2')!,
  document.querySelector<HTMLInputElement>('#posY2')!
);
