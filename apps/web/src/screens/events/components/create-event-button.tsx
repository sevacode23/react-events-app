import { memo } from 'react';

interface IProps {
  label: string;
  onClick: () => void;
  className?: string;
}

export const CreateEventButton = memo(function CreateEventButton(
  props: IProps
) {
  const { label, className = 'btn-fill', onClick } = props;

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
});
