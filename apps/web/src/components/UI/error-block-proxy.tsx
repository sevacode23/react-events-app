import { ErrorBlock } from './error-block';

interface IProps {
  title?: string;
  error?: Error | null;
  fallbackMessage?: string;
}

export const ErrorBlockProxy = (props: IProps) => {
  const { title, error, fallbackMessage } = props;

  if (!error) {
    return null;
  }

  return (
    <ErrorBlock title={title} error={error} fallbackMessage={fallbackMessage} />
  );
};
