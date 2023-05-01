'use client';

import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import OptionList, { Option } from '../optionlist/pages';

const App: React.FC = () => {
  const [activeOption, setActiveOption] = useState<Option | null>(null);

  const options: Option[] = [
    { id: 1, name: 'Opção 1' },
    { id: 2, name: 'Opção 2' },
    { id: 3, name: 'Opção 3' },
  ];

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-4xl font-bold p-4 bg-gray-200 rounded-lg">
          <DragItem>Arraste-me para escolher uma opção</DragItem>
        </div>
        <OptionList
          options={options}
          active={activeOption}
          setActive={setActiveOption}
        />
      </div>
    </DndProvider>
  );
};

interface DragItemProps {
  children: React.ReactNode;
}

const DragItem: React.FC<DragItemProps> = ({ children }) => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div
      className={`p-4 ${isDragging ? 'bg-blue-200' : 'bg-white'} rounded-lg`}
      draggable
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
    >
      {children}
    </div>
  );
};

export default App;
