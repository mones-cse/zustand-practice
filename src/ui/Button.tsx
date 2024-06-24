type TButton = {
  onClick: () => void;
  children: React.ReactNode;
};
export const BlueButton: React.FC<TButton> = ({ onClick, children }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const RedButton: React.FC<TButton> = ({ onClick, children }) => {
  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
