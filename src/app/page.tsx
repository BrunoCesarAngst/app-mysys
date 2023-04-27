//  criar uma página com o nome Home
//  dividida em duas colunas
//  na primeira coluna com 1/3 do tamanho, ter um input para adicionar tarefas com o foco inicial com o enter,
//  adicionar a tarefa na lista
//  abaixo desse input, vai tem uma lista de links para outras páginas do site com o nome bem a esquerda e a quantidade
// de tarefas que tem nessa página bem a direita
//  na segunda coluna com 2/3 do tamanho, ter uma lista de tarefas editável que mostra o texto da tarefa, a data de
// criação e um botão para remover a tarefa, um botão para marcar a tarefa como completa ou incompleta e um botão para
// editar o texto da tarefa

'use client';

import React, { useState } from 'react';

// criar um tipo Task com os campos id, text, completed, data de criação e data de atualização
type Task = {
  id: number;
  text: string;
  createdAt: string;
  updatedAt: string;
  discerned: boolean;
  fastAction?: boolean;
  incubate?: boolean;
  reference?: boolean;
  trash?: boolean;
  delegated?: boolean;
  actionDate?: boolean;
  context?: boolean;
  project?: boolean;
  completed?: boolean;
};

export default function Home() {
  // criar um estado para armazenar as tarefas da lista que respeitem o tipo Task
  const [tasks, setTasks] = useState<Task[]>([]);

  // criar um estado para armazenar o valor do input
  const [inputValue, setInputValue] = useState('');

  // criar um estado para armazenar o índice da tarefa que está sendo editada
  const [editIndex, setEditIndex] = useState<number | null>(null);

  // criar um estado para armazenar o valor do input de edição
  const [editValue, setEditValue] = useState<string>('');

  // criar um estado para motrar ou não um modal
  const [showModal, setShowModal] = useState<boolean>(false);

  // criar uma referência para o input de adicionar tarefas
  const inputRef = React.useRef<HTMLInputElement>(null);

  // criar uma função para lidar com o evento de pressionar uma tecla no input
  const handleInputKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      setTasks(prevTasks => [
        ...prevTasks,
        {
          id: Math.floor(Math.random() * 1000),
          text: inputValue,
          createdAt: new Date().toLocaleTimeString(),
          updatedAt: new Date().toLocaleTimeString(),
          discerned: false,
          completed: false,
        },
      ]);
      setInputValue('');
      event.currentTarget.value = '';
      inputRef.current?.focus();
    }
  };

  // criar uma função para lidar com o evento de pressionar uma tecla no input de edição
  const handleItemClicked = (index: number) => {
    setEditIndex(index);
    setEditValue(tasks[index].text);
  };

  // criar uma função que antes de atualizar o valor do input de edição abre um alarta para confirmar a ação
  const handleEditSaveClick = () => {
    if (editIndex !== null) {
      if (window.confirm('Deseja salvar as alterações?')) {
        setTasks(prevTasks => {
          const newTasks = [...prevTasks];
          newTasks[editIndex] = {
            ...newTasks[editIndex],
            text: editValue,
            updatedAt: new Date().toLocaleTimeString(),
          };
          return newTasks;
        }),
          setEditIndex(null),
          setEditValue('');
      }
    }
  };

  // criar uma função para remover uma tarefa da lista
  const removeTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // criar uma função para marcar uma tarefa como completa
  const completeTask = (id: number) => {
    setTasks(
      tasks.map(task => {
        if (task.id === id) {
          return { ...task, completed: true, updatedAt: new Date().toLocaleTimeString() };
        }
        return task;
      })
    );
  };

  // criar uma função para marcar uma tarefa como incompleta
  const incompleteTask = (id: number) => {
    setTasks(
      tasks.map(task => {
        if (task.id === id) {
          return { ...task, completed: false, updatedAt: new Date().toLocaleTimeString() };
        }
        return task;
      })
    );
  };

  // retornar o componente com o input de adicionar tarefas e a lista de tarefas com os botões de remover, editar, marcar como completa ou incompleta
  return (
    <div className="flex h-screen">
      <div className="p-3 w-1/3 bg-gray-100">
        <h1 className="text-2xl font-bold">Adicionar Coisas</h1>
        <input
          className="w-full h-16 px-6"
          type="text"
          onChange={e => setInputValue(e.target.value)}
          placeholder="Pressione enter para adicionar alguma coisa"
          onKeyDown={handleInputKeyPress}
        />
        <div className="p-1">
          <h1 className="text-2xl font-bold">Listas</h1>
          <ul className="p-1">
            <li className="flex justify-between">
              <a href="/" className="">
                Inbox
              </a>
              <span className="">{tasks.length}</span>
            </li>
          </ul>
        </div>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-3 rounded">
            <h1 className="text-2xl font-bold">Modal</h1>
            <p>Conteúdo do modal</p>
            <button onClick={() => setShowModal(false)}>Fechar</button>
          </div>
        </div>
      )}
      <button onClick={() => setShowModal(true)}>Abrir</button>
      <div className="p-3 w-2/3 bg-gray-200">
        <h1 className="text-2xl font-bold">Inbox</h1>
        <ul>
          {tasks.map((task, index) => (
            <li key={task.id}>
              {editIndex === index ? (
                <input
                  type="text"
                  value={editValue}
                  onChange={e => setEditValue(e.target.value)}
                />
              ) : (
                <span
                  className={`cursor-pointer ${
                    task.completed ? 'line-through' : ''
                  }`}
                  onClick={() => handleItemClicked(index)}
                >
                  {task.text} - {task.createdAt} - {task.updatedAt}
                </span>
              )}
              <button onClick={() => removeTask(task.id)}>🗑️</button>
              {editIndex === index ? (
                <button onClick={handleEditSaveClick}>💾</button>
              ) : (
                <button onClick={() => handleItemClicked(index)}>✏️</button>
              )}
              {task.completed ? (
                <button onClick={() => incompleteTask(task.id)}>✅</button>
              ) : (
                <button onClick={() => completeTask(task.id)}>◻︎</button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
