import Application from '@/engine/application';
import qiu_1 from '@/source/img/qiu_1.png';
import banner from '@/source/img/banner.png';
import ImageSpirit from '@/engine/spirit/imageSpirit';
import Canvas from './engine/canvas';
import ImageLoader from './engine/loader/imageLoader';
import BallPhysics from './engine/physics/ballPhysics';

// export function init() {
//   const ref = <HTMLCanvasElement>document.getElementById('canvas');
//   const application = new Application(ref, window.innerWidth, window.innerHeight);
//   const { context: ctx } = application;
//   ctx.beginPath();
//   ctx.arc(100, 100, 20, 0, 2 * Math.PI);
//   ctx.strokeStyle='green';
//   ctx.lineWidth=40;
//   ctx.stroke();
//   ctx.save();
//   ctx.clip(); // 剪切路径
//   const img = new Image();
//   img.src = banner;
//   img.onload = function () {
//     ctx.drawImage(img, 80, 80, 40, 40);
//     ctx.restore();
//   };
// }
export async function init() {
  const ref = <HTMLCanvasElement>document.getElementById('canvas');
  // 创建canvas画布
  const canvas = new Canvas(ref, window.innerWidth, window.innerHeight);
  // 加载图片资源
  const imageLoader = new ImageLoader();
  await imageLoader.loadImage([{
    name: 'vitejs',
    src: 'https://cn.vitejs.dev/logo.svg',
  }]);
  const vitejsImg = <CanvasImageSource>imageLoader.getImgByName('vitejs');
  // 创建物理引擎
  const ballPhysics = new BallPhysics(canvas, 0.1);
  // 创建球球（图片填充的）
  const imageSpirit = new ImageSpirit(vitejsImg, 20);
  imageSpirit.setInitialAttr(100, 100, 0);
  canvas.addBalls(imageSpirit);
  render(canvas, ballPhysics);
}
let n = 0;
let id = 0;
function render(canvas: Canvas, ballPhysics: BallPhysics) {
  if (n++ > 9) {
    // return cancelAnimationFrame(id);
  }
  ballPhysics.nextTick();
  console.log(111);
  canvas.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  // console.log('window.innerHeight: ', window.innerHeight);
  canvas.renderImageSpirits();
  id = requestAnimationFrame(() => {
    render(canvas, ballPhysics);
  });
}


// const imageSpirit = new ImageSpirit(application.context, vitejsImg);
// imageSpirit.draw(100, 100, 20);
// render(application, imageSpirit);

// function render(application: Application, imageSpirit: ImageSpirit) {
//   application.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
//   imageSpirit.draw(100, n, 20);
//   if (n <= window.innerHeight) {
//     n += 5;
//   } else {
//     n = 0;
//   }
//   requestAnimationFrame(() => {
//     render(application, imageSpirit);
//   });
// }