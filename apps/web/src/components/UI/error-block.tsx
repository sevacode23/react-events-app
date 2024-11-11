import { isAxiosError } from 'axios';

interface IProps {
  error: Error;
  title?: string;
  fallbackMessage?: string;
}

const getMessage = (error: Error, fallbackMessage?: string) => {
  if (isAxiosError(error)) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const errorMessage: string = error.response?.data.error?.message;

    if (errorMessage) {
      return errorMessage;
    }

    return error.response?.statusText;
  }

  return error.message || fallbackMessage;
};

export const ErrorBlock = (props: IProps) => {
  const { title, error, fallbackMessage } = props;

  const RenderTitle = title ? <p className="font-bold">{title}</p> : null;

  const message = getMessage(error, fallbackMessage);

  return (
    <div className="rounded-lg bg-rose-200 p-4 text-center text-red-800">
      {RenderTitle}

      <p className="font-normal">{message}</p>
    </div>
  );
};
