import { UploadFile } from 'antd/es/upload/interface';
import constants from '@constants';

const normalizeImage = (image: any): Promise<any> =>
    new Promise((resolve) => {
        if (image) {
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = constants.AVATAR.WIDTH;
                canvas.height = constants.AVATAR.HEIGHT;
                const img = document.createElement('img');
                if (typeof reader.result === 'string') {
                    img.src = reader.result;
                }
                img.onload = () => {
                    const ctx = canvas.getContext('2d');
                    if (ctx) {
                        ctx.drawImage(
                            img,
                            0,
                            0,
                            constants.AVATAR.WIDTH,
                            constants.AVATAR.HEIGHT
                        );
                    }
                    const dataURL = canvas.toDataURL('image/jpeg', 0.5);
                    resolve(dataURL);
                };
            };
        }
    });

export default normalizeImage;
