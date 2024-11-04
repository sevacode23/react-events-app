interface IProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit: () => void;
}

export const SearchBar = (props: IProps) => {
  const { value, onChange, onSubmit } = props;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <div className="grid justify-start">
      <form
        className="rounded-md overflow-hidden grid grid-cols-[1fr_auto]"
        onSubmit={handleSubmit}
      >
        <input
          className="input rounded-r-none py-2 px-4"
          type="sea"
          placeholder="Search events"
          value={value}
          onChange={onChange}
        />

        <button className="bg-pastelBlue py-2 px-4 font-bold">Search</button>
      </form>
    </div>
  );
};
