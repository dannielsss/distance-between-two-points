import { setupCanvas } from './canvas';

import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <canvas id="canvas" width="500px" height="500px"></canvas>
  </div>
`;

setupCanvas(document.querySelector<HTMLCanvasElement>('#canvas')!);
