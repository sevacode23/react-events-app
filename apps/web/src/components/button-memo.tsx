import { memo } from 'react';

export const ButtonMemo = memo(function Button(
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) {
  return <button className="btn-fill" {...props} />;
});
