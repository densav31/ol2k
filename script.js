import { Application } from 'https://unpkg.com/@splinetool/runtime@0.9.383/build/spline.module.js';

// Создаём canvas и добавляем в контейнер
const canvas = document.createElement('canvas');
document.getElementById('spline-container').appendChild(canvas);

// Загружаем сцену (замени на свою ссылку Spline)
const app = new Application(canvas);
app.load('https://prod.spline.design/ВАША_СЦЕНА/scene.splinecode');

// Переменная для отслеживания вращения
let rotationY = 0;

// Слушаем прокрутку колесика мыши
window.addEventListener('wheel', (e) => {
  // Изменяем rotationY пропорционально прокрутке
  rotationY += e.deltaY * 0.005; // коэффициент скорости вращения
  if(app.scene.children[0]) {
    app.scene.children[0].rotation.y = rotationY;
  }
});
