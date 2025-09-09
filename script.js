import { Application } from 'https://unpkg.com/@splinetool/runtime@0.9.383/build/spline.module.js';

const canvas = document.createElement('canvas');
document.getElementById('spline-container').appendChild(canvas);

const app = new Application(canvas);
app.load('https://prod.spline.design/605ETx3tOoOhvkow/scene.splinecode');

let rotationY = 0;

window.addEventListener('wheel', (e) => {
  rotationY += e.deltaY * 0.005;
  if (app.scene.children[0]) {
    app.scene.children[0].rotation.y = rotationY;
  }
});
