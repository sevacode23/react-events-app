interface IProps {
  children: React.ReactNode;
  label?: string;
}

export const ControlLabelWrapper = (props: IProps) => {
  const { label, children } = props;

  return (
    <label className="grid gap-y-1 font-lato text-arsenic">
      <b className="text-sm text-left">{label}</b>

      {children}
    </label>
  );
};
