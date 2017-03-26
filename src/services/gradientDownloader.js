import { saveAs } from 'file-saver';
import toBlob from 'canvas-to-blob';

toBlob.init();


export default function (name, color1, color2) {
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
  grd.addColorStop(0, color1);
  grd.addColorStop(1, color2);

  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, 1200, 800);

  canvas.toBlob((blob) => {
    saveAs(blob, `${name}.jpg`);
  });

  document.getElementById('canva').remove();
}
