'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function Teste() {
  const [content, setContent] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Quando o modo de edição é ativado, definimos o foco no campo de entrada
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setIsEditing(false);
    }
  };

  const handleContentClick = () => {
    setIsEditing(true);
  };

  return (
    <div>
      <div>
        <title>Notebook Page</title>
      </div>

      <main className="container mx-auto py-10 px-4">
        <div
          className="bg-white border rounded-md shadow p-4 h-20 overflow-y-auto relative"
          onClick={handleContentClick}
        >
          {isEditing ? (
            <input
              ref={inputRef}
              type="text"
              value={content}
              onChange={e => setContent(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full h-full absolute top-0 left-0 p-4 border-b-2 outline-none text-xl font-medium text-gray-800"
            />
          ) : (
            <div className="whitespace-pre-wrap break-words text-gray-800 text-xl font-medium">
              {content || 'Comece a escrever sua nota aqui...'}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
