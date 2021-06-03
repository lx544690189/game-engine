type ISpeed = {
  x: number;
  y: number;
}

type IPosition = {
  x: number;
  y: number;
}

/**
 * 图片填充的圆形精灵
 */
export default class ImageSpirit {
  image: CanvasImageSource;
  // /** 速度（px/s） */
  // speed?: number;
  // /** 运动方向 */
  // speedAngle?: number;
  private position: IPosition = {
    x: 0,
    y: 0,
  }
  private speed: ISpeed = {
    x: 0,
    y: 0,
  };
  private radius: number;

  /**
   * @param context canvas context
   * @param image 图片资源
   */
  constructor(image: CanvasImageSource, radius: number) {
    this.image = image;
    this.radius = radius;
  }

  get getPosition(){
    return this.position;
  }

  get getSpeed(){
    return this.speed;
  }

  get getRadius(){
    return this.radius;
  }

  /**
   * 配置速度
   * @param motion
   */
  setSpeed(speed: ISpeed) {
    this.speed = speed;
  }

  setPosition(position: IPosition) {
    this.position = position;
  }
}