import Canvas from '../canvas';
import ImageSpirit from '../spirit/imageSpirit';

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
      this.nextMotionX(imageSpirit, diffTime);
      this.nextMotionY(imageSpirit, diffTime);
    }
    this.moment = Date.now() / 1000;
  }

  /**
   * X轴运动
   * @param imageSpirit
   * @param during
   */
  nextMotionX(imageSpirit: ImageSpirit, during: number) {
    const position = imageSpirit.getPosition;
    const speed = imageSpirit.getSpeed;
    const radius = imageSpirit.getRadius;
    const { width } = this.canvas;
    const distance = speed.x * during;
    const nextPositionX = position.x + distance;
    if (nextPositionX <= radius || nextPositionX >= width - radius) {
      speed.x = -speed.x;
    } else {
      position.x = nextPositionX;
    }
    imageSpirit.setPosition(position);
    imageSpirit.setSpeed(speed);
  }

  /**
   * Y轴运动
   * @param imageSpirit
   * @param during
   */
  nextMotionY(imageSpirit: ImageSpirit, during: number) {
    const position = imageSpirit.getPosition;
    const speed = imageSpirit.getSpeed;
    const radius = imageSpirit.getRadius;
    const { height } = this.canvas;
    if (speed.y > 0) { // 上抛
      const currentT = speed.y / this.gravity;
      const currentH = Math.pow(speed.y, 2) / (2 * this.gravity);
      const beforeT = currentT - during;
      const beforeSpeed = this.gravity * beforeT;
      const beforeH = Math.pow(beforeSpeed, 2) / (2 * this.gravity);
      const distance = currentH - beforeH;
      const nextPositionY = position.y - distance;
      if (nextPositionY <= radius) {
        speed.y = - speed.y;
      } else {
        position.y = nextPositionY;
        speed.y = beforeSpeed;
      }
    } else { // 自由落体
      const beforeT = -speed.y / this.gravity;
      const currentT = beforeT + during;
      const beforeH = Math.pow(speed.y, 2) / (2 * this.gravity);
      const currentSpeed = this.gravity * currentT;
      const currentH = Math.pow(currentSpeed, 2) / (2 * this.gravity);
      const distance = currentH - beforeH;
      const nextPositionY = position.y + distance;
      if (nextPositionY >= height - radius) {
        speed.y = - speed.y;
      } else {
        position.y = nextPositionY;
        speed.y = - currentSpeed;
      }
    }
  }
}