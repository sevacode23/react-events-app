import { memo } from 'react';

import { ControlLabelWrapper } from 'components/UI';
import { SERVER_CONSTANTS } from 'const';

import { useImagePicker } from './image-picker.state';

interface IProps {
  onSelect: (id: string) => void;
  selected?: string;
}

export const ImagePicker = memo(function ImagePicker(props: IProps) {
  const { selected, onSelect } = props;

  const { data, isPending } = useImagePicker();

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return null;
  }

  const RenderImages = data.map((image) => {
    const onClick = () => {
      onSelect(image);
    };

    return (
      <img
        key={image}
        className={`rounded-md border-2 transition-colors cursor-pointer select-none ${image === selected ? 'border-primary' : 'border-transparent'}`}
        src={SERVER_CONSTANTS.IMAGES_URL + image}
        draggable={false}
        onClick={onClick}
      />
    );
  });

  return (
    <ControlLabelWrapper label="SELECT AN IMAGE">
      <div className="grid grid-flow-col gap-x-2 select-none" draggable={false}>
        {RenderImages}
      </div>
    </ControlLabelWrapper>
  );
});
