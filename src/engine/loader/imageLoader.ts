type ImageType = {
  name: string;
  src: string;
  img: CanvasImageSource;
}

export default class ImageLoader{
  images: ImageType[] = [];

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