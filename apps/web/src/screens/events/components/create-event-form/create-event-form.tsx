import { Button, ControlLabelWrapper, Modal, TextField } from 'components/UI';

import { useCreateEventForm } from './create-event-form.state';

interface IProps {
  onClose: () => void;
}

export const CreateEventForm = (props: IProps) => {
  const { onClose } = props;

  const {
    title,
    description,
    date,
    time,
    location,
    onChangeTitle,
    onChangeDescription,
    onChangeDate,
    onChangeTime,
    onChangeLocation,
    onSubmit,
  } = useCreateEventForm();

  return (
    <Modal>
      <form className="w-96 grid gap-y-7" onSubmit={onSubmit}>
        <div className="grid gap-y-5">
          <TextField label="TITLE" value={title} onChange={onChangeTitle} />

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

          <Button>Create</Button>
        </div>
      </form>
    </Modal>
  );
};
