import { Application } from 'https://unpkg.com/@splinetool/runtime@0.9.383/build/spline.module.js';

const canvas = document.createElement('canvas');
document.getElementById('spline-container').appendChild(canvas);

const app = new Application(canvas);
app.load('https://prod.spline.design/ВАША_СЦЕНА/scene.splinecode');

gsap.registerPlugin(ScrollTrigger);

gsap.to(app.scene.children[0].rotation, {
  y: Math.PI * 2,
  scrollTrigger: {
    trigger: "#content",
    start: "top top",
    end: "bottom bottom",
    scrub: true
  }
});
