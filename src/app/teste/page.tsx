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
          header sim
        </header>
        <main className="flex-1 grid grid-cols-1 md:grid-cols-none w-full mt-11 px-4 py-2 overflow-y-auto">
          <div className="space-y-6 mt-6 mb-10">
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
        <footer className="fixed bottom-0 w-full px-4 py-2 h-auto bg-gray-700">
          <div className="relative flex w-auto justify-between items-center">
            <input
              type="text"
              className="block form-input w-full border-none border-0 focus:ring-0 outline-none mobilexs:h-[2rem] mobile:h-[3rem]  md:h-[4rem] h-[6rem] transition-all duration-300 mobilexs:text-xs mobile:text-sm md:text-base text-lg"
              maxLength={100}
              placeholder="Descreva algo na linha..." // type="text"
              name="task"
              id="task"
              value={currentTask}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <div className="absolute -inset-y-1 left-0 pl-3">
              <span className="mt-16 mobilexs:text-xs mobile:text-sm md:text-base text-lg">
                {currentTask.length}/100
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
