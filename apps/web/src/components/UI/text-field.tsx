import { memo } from 'react';
import { ControlLabelWrapper } from './control-label-wrapper';

interface IProps {
  label: string;
  value: string;
  onChange: React.ChangeEventHandler;
  isArea?: boolean;
}

export const TextField = memo(function TextField(props: IProps) {
  const { label, value, isArea, onChange } = props;

  const Element = isArea ? 'textarea' : 'input';
  const rows = isArea ? 3 : undefined;

  return (
    <ControlLabelWrapper label={label}>
      <Element
        className="input resize-none"
        type="text"
        rows={rows}
        value={value}
        onChange={onChange}
      />
    </ControlLabelWrapper>
  );
});
