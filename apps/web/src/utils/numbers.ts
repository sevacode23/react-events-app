import { sleep } from './promises';

export const generateRandomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const getMagicNumber = async (min: number, max: number) => {
  await sleep(1500);

  return generateRandomNumber(min, max);
};
