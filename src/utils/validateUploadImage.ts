import {message} from "@utils";
import CONSTANTS from "@locale/en-CA";

const validateUploadImage = (file: any) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error(CONSTANTS.COMPONENTS.UPLOAD.ERROR.IMAGE_TYPE);
    }
    const isLt1M = file.size / 1024 / 1024 < 1;
    if (!isLt1M) {
        message.error(CONSTANTS.COMPONENTS.UPLOAD.ERROR.IMAGE_SIZE);
    }
    return isJpgOrPng && isLt1M;
}

export default validateUploadImage;
