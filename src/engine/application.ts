import Spirit from './spirit';

type ImageType = {
  name: string;
  src: string;
  img: CanvasImageSource;
}

export default class Application {

  canvasRef: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  images: ImageType[] = [];
  // spirit: Spirit;

  /**
   * @param ref canvas元素
   * @param width 宽（px）
   * @param height 高（px）
   */
  constructor(ref: HTMLCanvasElement, width: number, height: number) {
    // 防止canvas在高倍屏下模糊
    if (window.devicePixelRatio) {
      ref.style.width = width + 'px';
      ref.style.height = height + 'px';
      ref.height = height * window.devicePixelRatio;
      ref.width = width * window.devicePixelRatio;
    }
    this.canvasRef = ref;
    const context = ref.getContext('2d');
    if (context) {
      this.context = context;
      this.context.scale(window.devicePixelRatio, window.devicePixelRatio);
    } else {
      throw new Error('getContext of null');
    }
  }

  /**
   * 加载图片资源
   * @param imgSource
   */
  async loadImage(imgSource: {
    name: string;
    src: string;
  }[]) {
    const tasks = imgSource.map((item) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = item.src;
        img.onload = function () {
          resolve({
            ...item,
            img,
          });
        };
      });
    });
    const result = await Promise.all(tasks);
    this.images = this.images.concat(result as ImageType[]);
  }

  getImgByName(name: string) {
    const match = this.images.find((item) => item.name === name);
    if(match){
      return match.img;
    }
  }
}