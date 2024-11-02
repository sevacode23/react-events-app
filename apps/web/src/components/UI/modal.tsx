interface IProps {
  children: React.ReactNode;
}

export const Modal = (props: IProps) => {
  const { children } = props;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 grid place-items-center">
      <div className="shadow-cardDark rounded-md p-8 bg-platinum animate-fade-in">
        {children}
      </div>
    </div>
  );
};
