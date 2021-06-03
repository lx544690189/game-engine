import ImageSpirit from '../spirit/imageSpirit';

export default class Canvas {
  ref: HTMLCanvasElement;
  width: number;
  height: number;
  context: CanvasRenderingContext2D;
  /** 球球精灵 */
  imageSpirits: ImageSpirit[] = [];

  /**
   * @param ref canvas元素
   * @param width 宽（px）
   * @param height 高（px）
   */
  constructor(ref: HTMLCanvasElement, width: number, height: number) {
    this.width = width;
    this.height = height;
    // 防止canvas在高倍屏下模糊
    if (window.devicePixelRatio) {
      ref.style.width = width + 'px';
      ref.style.height = height + 'px';
      ref.width = width * window.devicePixelRatio;
      ref.height = height * window.devicePixelRatio;
    }
    this.ref = ref;
    const context = ref.getContext('2d');
    if (context) {
      this.context = context;
      this.context.scale(window.devicePixelRatio, window.devicePixelRatio);
    } else {
      throw new Error('getContext of null');
    }
  }

  /** 添加球球精灵 */
  addBalls(ball: ImageSpirit) {
    this.imageSpirits.push(ball);
  }

  /**
   * 渲染精灵
   * @param x 圆心坐标轴x
   * @param y 圆心坐标轴y
   * @param radius 半径
   */
  renderImageSpirits() {
    const length = this.imageSpirits.length;
    for (let i = 0; i < length; i++) {
      const imageSpirit = this.imageSpirits[i];
      const { image } = imageSpirit;
      const { x, y } = imageSpirit.getPosition;
      const radius = imageSpirit.getRadius;
      this.context.save();
      this.context.beginPath();
      this.context.arc(x, y, radius, 0, 2 * Math.PI);
      // this.context.stroke();
      this.context.clip(); // 剪切路径
      const diameter = radius * 2;
      const dx = x - radius;
      const dy = y - radius;
      this.context.drawImage(image, dx, dy, diameter, diameter);
      this.context.restore();
    }
  }
}