'use client';

import { useState } from 'react';

export default function Teste() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [currentTask, setCurrentTask] = useState('');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && currentTask !== '') {
      setTasks([...tasks, currentTask]);
      setCurrentTask('');
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTask(event.target.value);
  };

  return (
    <>
      <div className="flex-1 items-center justify-center">
        <header className=" fixed top-0 grid grid-cols-1 sm:grid-cols-3 w-full px-4 py-2">
          header
        </header>
        <main className="flex-1 grid grid-cols-1 md:grid-cols-none w-full mt-11 px-4 py-2 overflow-y-auto">
          <div className="space-y-6 mt-6">
            <div className="">
              {tasks.map((task, index) => (
                <div key={index} className="pl-6 pr-3">
                  <p className="mx-3 break-words">{task}</p>
                  <hr className="my-6 mt-1 border-1 border-gray-400" />
                </div>
              ))}
            </div>
            <p>fim</p>
          </div>
        </main>
        <footer className="fixed bottom-0 w-full px-4 py-2 h-auto">
          <div className="flex w-auto justify-between items-center">
            <input
              className="form-input w-full resize-none overflow-hidden outline-none h-[5rem] md:h-[10rem] transition-all duration-300 text-base sm:text-lg md:text-xl"
              maxLength={100}
              placeholder="Descreva algo na linha..." // type="text"
              name="task"
              id="task"
              value={currentTask}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <span className="mt-16">{currentTask.length}/100</span>
          </div>
        </footer>
      </div>
    </>
  );
}
