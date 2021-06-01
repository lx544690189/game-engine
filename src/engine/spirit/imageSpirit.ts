/**
 * 图片填充的圆形精灵
 */
export default class ImageSpirit {
  image: CanvasImageSource;
  x?: number;
  y?: number;
  /** 速度（px/s） */
  speed?: number;
  /** 运动方向 */
  speedAngle: number;
  radius: number;

  /**
   * @param context canvas context
   * @param image 图片资源
   */
  constructor(image: CanvasImageSource, radius: number) {
    this.image = image;
    this.radius = radius;
  }

  setInitialAttr(x: number, y: number, speed:number){
    this.x = x;
    this.y = y;
    this.speed = speed;
  }
}