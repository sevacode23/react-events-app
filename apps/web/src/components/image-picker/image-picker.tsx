import { memo } from 'react';

import { ControlLabelWrapper, ErrorBlock } from 'components/UI';
import { SERVER_CONSTANTS } from 'const';

import { useImagePicker } from './image-picker.state';

interface ISelectableImagesProps {
  images: string[];
  onSelect: (image: string) => void;
  selected?: string;
}

interface IProps {
  onSelect: (id: string) => void;
  selected?: string;
}

const SelectableImages = (props: ISelectableImagesProps) => {
  const { images, selected, onSelect } = props;

  const RenderImages = images.map((image) => {
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
    <div className="grid grid-flow-col gap-x-2 select-none" draggable={false}>
      {RenderImages}
    </div>
  );
};

export const ImagePicker = memo(function ImagePicker(props: IProps) {
  const { selected, onSelect } = props;

  const { data, isPending, error } = useImagePicker();

  let Element = null;

  if (error) {
    Element = <ErrorBlock title="Failed to load images" error={error} />;
  } else if (isPending) {
    Element = <p>Loading...</p>;
  } else if (data) {
    Element = (
      <SelectableImages images={data} selected={selected} onSelect={onSelect} />
    );
  }

  return (
    <ControlLabelWrapper label="SELECT AN IMAGE">{Element}</ControlLabelWrapper>
  );
});
