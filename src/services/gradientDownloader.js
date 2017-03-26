import { saveAs } from 'file-saver';
import toBlob from 'canvas-to-blob';

// Adds toBlob polyfill to safari
toBlob.init();

export default function (name, ...colors) {
  const canvas = document.createElement('canvas');

  canvas.id = 'canva';
  canvas.width = 1200;
  canvas.height = 800;
  canvas.style.zIndex = 1;
  canvas.style.position = 'absolute';
  document.body.appendChild(canvas);

  const canva = document.getElementById('canva');
  const ctx = canva.getContext('2d');

  const grd = ctx.createLinearGradient(0, 0, 1200, 800);

  // colors.forEach((color, index) => {
  //   grd.addColorStop((1 / index), color);
  // });

  /**
   * TODO: Calculate the color stops programmatically
   */
  switch (colors.length) {
    case 2:
      grd.addColorStop(0, colors[0]);
      grd.addColorStop(1, colors[1]);
      break;
    case 3:
      grd.addColorStop(0, colors[0]);
      grd.addColorStop(0.5, colors[1]);
      grd.addColorStop(1, colors[2]);
      break;
    case 4:
      grd.addColorStop(0, colors[0]);
      grd.addColorStop(0.4, colors[1]);
      grd.addColorStop(0.8, colors[2]);
      grd.addColorStop(1, colors[3]);
      break;
    case 5:
      grd.addColorStop(0, colors[0]);
      grd.addColorStop(0.25, colors[1]);
      grd.addColorStop(0.5, colors[2]);
      grd.addColorStop(0.75, colors[3]);
      grd.addColorStop(1, colors[4]);
      break;
    default:
  }

  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, 1200, 800);

  canvas.toBlob((blob) => {
    saveAs(blob, `${name}.jpg`);
  });

  document.getElementById('canva').remove();
}
