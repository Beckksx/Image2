import {Image} from "./Image";

class ImagemService {
  baseURL: string = 'http://localhot:8080/images';

  async buscar(): Promise<Image[]>{
    const response = await fetch(this.baseURL);
    return await response.json();

    }
  }
// react hook
  export const useImage = () => new ImagemService();



