import { IMAGES } from 'components/image';

import { CreateEventButton } from '../create-event-button';

import { useEventsHeader } from './events-header.state';
import { CreateEventForm } from '../create-event-form';

export const EventsHeader = () => {
  const { isShowForm, onCloseForm, onOpenForm } = useEventsHeader();

  const RenderModal = isShowForm ? (
    <CreateEventForm onClose={onCloseForm} />
  ) : null;

  return (
    <>
      <section
        className="pt-12 pb-32 p-header grid gap-y-16 text-eerieBlack font-bold"
        style={{ backgroundImage: `url(${IMAGES.meetUp})` }}
      >
        <div className="grid grid-flow-col justify-between">
          <h1 className="text-2xl text-white">React Events</h1>

          <CreateEventButton label="New Event" onClick={onOpenForm} />
        </div>

        <div className="grid justify-center gap-y-6 text-center font-quicksand">
          <p className="text-4xl ">
            Connect with amazing people <br />
            or <strong className="text-primaryLight">find a new passion</strong>
          </p>

          <div className="grid gap-y-4 justify-normal justify-items-center">
            <p className="font-normal text-xl">
              Anyone can organize and join events on React Event!
            </p>

            <CreateEventButton
              label="Create your first event"
              className="btn-fill text-xl"
              onClick={onOpenForm}
            />
          </div>
        </div>
      </section>

      {RenderModal}
    </>
  );
};
