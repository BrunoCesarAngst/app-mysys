import React from 'react';

export interface Option {
  id: number;
  name: string;
}

interface OptionListProps {
  options: Option[];
  active: Option | null;
  setActive: (option: Option) => void;
}

const OptionList: React.FC<OptionListProps> = ({
  options,
  active,
  setActive,
}) => {
  return (
    <div className="flex justify-around mt-4">
      {options.map(option => (
        <DropArea
          key={option.id}
          option={option}
          active={active}
          setActive={setActive}
        >
          {option.name}
        </DropArea>
      ))}
    </div>
  );
};

interface DropAreaProps {
  option: Option;
  active: Option | null;
  setActive: (option: Option) => void;
  children: React.ReactNode;
}

const DropArea: React.FC<DropAreaProps> = ({
  option,
  active,
  setActive,
  children,
}) => {
  const handleDrop = () => {
    setActive(option);
  };

  return (
    <div
      className={`p-4 border-2 border-gray-300 rounded-lg ${
        active?.id === option.id ? 'bg-green-200' : ''
      }`}
      onDrop={handleDrop}
      onDragOver={event => event.preventDefault()}
    >
      {children}
    </div>
  );
};

export default OptionList;
