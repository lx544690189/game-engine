import Canvas from '../canvas';

/**
 * 球体物理引擎
 */
export default class BallPhysics {
  /** Canvas */
  canvas: Canvas;
  /** 重力加速度 */
  gravity: number;
  /** 重力角度（0-360） */
  angle: number;
  /** 上一帧时间 */
  moment?: number;

  /**
   * @param canvas 画布对象
   * @param gravity 重力常量
   * @param angle 引力方向
   */
  constructor(canvas: Canvas, gravity: number, angle: number = 180) {
    this.canvas = canvas;
    this.gravity = gravity;
    this.angle = angle;
  }

  /** 计算当前球球位置、速度等信息 */
  nextTick() {
    const now = Date.now() / 1000;
    if (!this.moment) {
      this.moment = now;
    }
    const diffTime = now - this.moment;
    const imageSpirits = this.canvas.imageSpirits;
    const length = imageSpirits.length;
    for (let i = 0; i < length; i++) {
      const imageSpirit = imageSpirits[i];
      // if(imageSpirit.)
      const beforeT = <number>imageSpirit.speed / this.gravity;
      const currentT = beforeT + diffTime;
      const beforeH = (1 / 2) * this.gravity * Math.pow(beforeT, 2);
      const currentH = (1 / 2) * this.gravity * Math.pow(currentT, 2);
      const diffH = currentH - beforeH;
      const currentY = <number>imageSpirit.y + diffH;
      imageSpirit.speed = this.gravity * currentT;
      imageSpirit.y = currentY;
      console.log('currentY: ', currentY);
      // 边界碰撞，速度衰减
      if (currentY + imageSpirit.radius >= this.canvas.height) {
        imageSpirit.speed = imageSpirit.speed * 0.5;
        imageSpirit.y = this.canvas.height - imageSpirit.radius;
      }
      // console.log('imageSpirit.y: ', imageSpirit.y);
    }
  }
}