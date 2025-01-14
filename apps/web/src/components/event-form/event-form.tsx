import { ImagePicker } from '../image-picker';
import {
  Button,
  ControlLabelWrapper,
  ErrorBlockProxy,
  Modal,
  TextField,
} from '../UI';

import { IUseEventFormProps, useEventForm } from './event-form.state';

interface IProps extends IUseEventFormProps {
  buttonLabel: string;
  isPending: boolean;
  error: Error | null;
  onClose: () => void;
}

export const EventForm = (props: IProps) => {
  const { buttonLabel, isPending, error, init, onClose, onSubmit } = props;

  const {
    title,
    image,
    description,
    date,
    time,
    location,
    onChangeTitle,
    onChangeDescription,
    onChangeDate,
    onChangeTime,
    onChangeLocation,
    onSelectImage,
    handleSubmit,
  } = useEventForm({ init, onSubmit });

  const RenderButton = isPending ? (
    'Submitting...'
  ) : (
    <Button>{buttonLabel}</Button>
  );

  return (
    <Modal>
      <form className="w-[26rem] grid gap-y-7" onSubmit={handleSubmit}>
        <div className="grid gap-y-5">
          <TextField label="TITLE" value={title} onChange={onChangeTitle} />

          <ImagePicker selected={image} onSelect={onSelectImage} />

          <TextField
            isArea
            label="DESCRIPTION"
            value={description}
            onChange={onChangeDescription}
          />
        </div>

        <div className="grid gap-y-5">
          <div className="grid grid-flow-col justify-start gap-x-6">
            <ControlLabelWrapper label="DATE">
              <input
                className="input min-w-40"
                type="date"
                value={date}
                onChange={onChangeDate}
              />
            </ControlLabelWrapper>

            <ControlLabelWrapper label="TIME">
              <input
                className="input min-w-32"
                type="time"
                value={time}
                onChange={onChangeTime}
              />
            </ControlLabelWrapper>
          </div>

          <TextField
            label="LOCATION"
            value={location}
            onChange={onChangeLocation}
          />
        </div>

        <div className="grid justify-end gap-x-2 grid-flow-col">
          <Button variant="text" onClick={onClose}>
            Cancel
          </Button>

          {RenderButton}
        </div>

        <ErrorBlockProxy title="Failed to create event" error={error} />
      </form>
    </Modal>
  );
};
