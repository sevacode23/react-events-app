import { SERVER_CONSTANTS } from 'const';

export const getImageUrl = (image: string) =>
  SERVER_CONSTANTS.IMAGES_URL + image;
