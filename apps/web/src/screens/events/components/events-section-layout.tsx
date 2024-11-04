interface IProps {
  title: string;
  children: React.ReactNode;
}

export const EventsSectionLayout = (props: IProps) => {
  const { title, children } = props;

  return (
    <div className="grid gap-y-10">
      <h2 className="text-center text-pastelBlue text-3xl font-bold">
        {title}
      </h2>

      {children}
    </div>
  );
};
