import { Application } from 'https://cdn.jsdelivr.net/npm/@splinetool/runtime@0.9.383/build/spline.module.js';

const canvas = document.createElement('canvas');
document.getElementById('spline-container').appendChild(canvas);

const app = new Application(canvas);
app.load('https://prod.spline.design/605ETx3tOoOhvkow/scene.splinecode');

let currentAngle = 0;
const stepAngle = (2 * Math.PI) / 5; // если 5 объектов по кругу

window.addEventListener('wheel', (e) => {
  if (!app.scene.children[0]) return;

  if (e.deltaY > 0) {
    currentAngle -= stepAngle; // скрол вниз → вправо
  } else {
    currentAngle += stepAngle; // скрол вверх → влево
  }

  const circleGroup = app.scene.children[0];
  gsap.to(circleGroup.rotation, { 
    y: currentAngle, 
    duration: 0.5, 
    ease: "power2.out"
  });
});
