import Canvas from './engine/canvas';
import ImageSpirit from './engine/spirit/imageSpirit';
import ImageLoader from './engine/loader/imageLoader';
import BallPhysics from './engine/physics/ballPhysics';
import ballImg from '@/source/img/ball_1.png';

export async function init() {
  const ref = <HTMLCanvasElement>document.getElementById('canvas');
  // 创建canvas画布
  const canvas = new Canvas(ref, window.innerWidth, window.innerHeight);
  // 加载图片资源
  const imageLoader = new ImageLoader();
  await imageLoader.loadImage([{
    name: 'vitejs',
    // src: 'https://cn.vitejs.dev/logo.svg',
    src: ballImg,
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
  canvas.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  canvas.renderImageSpirits();
  id = requestAnimationFrame(() => {
    render(canvas, ballPhysics);
  });
}