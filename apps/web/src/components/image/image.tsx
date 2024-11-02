import { IMAGES } from './image.constants';

export type TImage = keyof typeof IMAGES;

interface IProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  type: TImage;
}

export const Image = (props: IProps) => {
  const { type, ...imgProps } = props;

  const src = IMAGES[type];

  return <img src={src} alt={type} {...imgProps} />;
};
