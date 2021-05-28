/**
 * 图片填充的圆形精灵
 */
export default class ImageSpirit {
  image: CanvasImageSource;
  x?: number;
  y?: number;
  /** 速度（px/s） */
  speed?: number;
  radius: number;

  /**
   * @param context canvas context
   * @param image 图片资源
   */
  constructor(image: CanvasImageSource, radius: number) {
    this.image = image;
    this.radius = radius;
  }

  // /**
  //  * 渲染精灵
  //  * @param x 圆心坐标轴x
  //  * @param y 圆心坐标轴y
  //  * @param radius 半径
  //  */
  // draw(x: number, y: number) {
  //   this.x = x;
  //   this.y = y;
  //   this.context.save();
  //   this.context.beginPath();
  //   this.context.arc(x, y, this.radius, 0, 2 * Math.PI);
  //   this.context.stroke();
  //   this.context.clip(); // 剪切路径
  //   const diameter = this.radius * 2;
  //   const dx = x - this.radius;
  //   const dy = y - this.radius;
  //   this.context.drawImage(this.image, dx, dy, diameter, diameter);
  //   this.context.restore();
  // }

  setInitialAttr(x: number, y: number, speed:number){
    this.x = x;
    this.y = y;
    this.speed = speed;
  }
}