const SelectOptions = ({
  action,
  name,
}: {
  action: (name: string) => void;
  name: string;
}) => {
  return (
    <p
      onClick={() => action(name)}
      className="text-lg w-[21%] text-center p-4 border border-gray-300 rounded-[5px] bg-primary-blue text-white cursor-pointer hover:bg-opacity-80"
    >
      {name}
    </p>
  );
};

export default SelectOptions;
