type TInput = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
  children?: React.ReactNode;
};

export const Input: React.FC<TInput> = ({
  onChange,
  value,
  placeholder,
  children,
}) => {
  return (
    <input
      className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-1 px-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    >
      {children}
    </input>
  );
};
