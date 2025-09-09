import { Application } from 'https://unpkg.com/@splinetool/runtime@0.9.383/build/spline.module.js';

// Создаём canvas
const canvas = document.createElement('canvas');
document.getElementById('spline-container').appendChild(canvas);

// Загружаем сцену
const app = new Application(canvas);
app.load('https://prod.spline.design/605ETx3tOoOhvkow/scene.splinecode');

let currentAngle = 0;       // текущий угол вращения окружности
const stepAngle = (2 * Math.PI) / 5; // шаг вращения (например 5 объектов по кругу)

window.addEventListener('wheel', (e) => {
  if(!app.scene.children[0]) return;

  // Определяем направление скролла
  if(e.deltaY > 0) {
    // Скролл вниз → вращаем вправо
    currentAngle -= stepAngle;
  } else {
    // Скролл вверх → вращаем влево
    currentAngle += stepAngle;
  }

  // Применяем плавное вращение к группе объектов
  const circleGroup = app.scene.children[0]; // родитель группы объектов
  gsap.to(circleGroup.rotation, { 
    y: currentAngle, 
    duration: 0.5, 
    ease: "power2.out"
  });
});
