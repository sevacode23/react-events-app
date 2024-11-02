import { memo } from 'react';

interface IProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: 'fill' | 'text';
}

export const Button = memo(function Button(props: IProps) {
  const { variant = 'fill', ...buttonProps } = props;

  const className = variant === 'fill' ? 'btn-fill' : 'btn-text';

  return <button className={className} {...buttonProps}></button>;
});
