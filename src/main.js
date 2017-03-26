// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueClipboards from 'vue-clipboards';
// import { saveAs } from 'file-saver';

import App from './App';

require('./stylesheets/app.scss');

Vue.use(VueClipboards);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});

// const canvas = document.createElement('canvas');
// // const ctx = canvas.getContext('2d');

// canvas.id = 'canva';
// canvas.width = 1200;
// canvas.height = 800;
// canvas.style.zIndex = 1;
// canvas.style.position = 'absolute';
// // canvas.style.backgroundColor = 'slategrey';
// // canvas.style.border = '5px solid red';

// document.body.appendChild(canvas);


// const canva = document.getElementById('canva');
// const ctx = canva.getContext('2d');


// const grd = ctx.createLinearGradient(0, 0, 1200, 800);
// grd.addColorStop(0, '#159957');
// grd.addColorStop(1, '#155799');

// ctx.fillStyle = grd;
// ctx.fillRect(0, 0, 1200, 800);

// canvas.toBlob((blob) => {
//   saveAs(blob, 'pretty image.jpg');
// });

// document.getElementById('canva').remove();

