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

import { lists } from '@/contants/lists';
import { Task, TaskSchema } from '@/types/task';
import { createId } from '@paralleldrive/cuid2';
import {} from 'date-fns';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

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

  const pathname = usePathname();

  // criar uma função para lidar com o evento de pressionar uma tecla no input
  const handleInputKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      try {
        const newTask = TaskSchema.parse({
          id: createId(),
          text: inputValue,
          createdAt: new Date(),
          updatedAt: null,
          deletedAt: null,
          completed: false,
        });
        setTasks(prevTasks => [...prevTasks, newTask]);
        setInputValue('');
        event.currentTarget.value = '';
        inputRef.current?.focus();
      } catch (error) {
        console.log(error);
      }
      console.log(new Date());
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
      // chamar o modal
      setShowModal(true);
      // if (window.confirm('Deseja salvar as alterações?')) {
      setTasks(prevTasks => {
        const newTasks = [...prevTasks];
        newTasks[editIndex] = {
          ...newTasks[editIndex],
          text: editValue,
          // createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null,
        };
        return newTasks;
      }),
        setEditIndex(null),
        setEditValue('');
      // }
    }
  };

  // criar uma função para remover uma tarefa da lista
  const removeTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // criar uma função para marcar uma tarefa como completa
  const completeTask = (id: string) => {
    setTasks(
      tasks.map(task => {
        if (task.id === id) {
          return TaskSchema.parse({
            ...task,
            discerned: false,
            completed: false,
            updatedAt: new Date(),
          });
        }
        return task;
      })
    );
  };

  // criar uma função para marcar uma tarefa como incompleta
  const incompleteTask = (id: string) => {
    setTasks(
      tasks.map(task => {
        if (task.id === id) {
          return TaskSchema.parse({
            ...task,
            completed: false,
            updatedAt: new Date(),
          });
        }
        return task;
      })
    );
  };

  // retornar o componente com o input de adicionar tarefas e a lista de tarefas com os botões de remover, editar, marcar como completa ou incompleta
  return (
    <>
      {/* criar um container para o conteúdo da página */}
      <main className="flex justify-center">
        {/* criar um componente para o modal  */}
        {showModal && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-3 rounded">
              <h1 className="text-2xl font-bold">Modal</h1>
              <p>Conteúdo do modal</p>
              <div className="flex justify-between">
                <button
                  className="w-1/3 p-4"
                  onClick={() => {
                    alert('esquerdo');
                    setShowModal(false);
                  }}
                >
                  esquerdo
                </button>
                <button
                  className="w-1/3 p-4"
                  onClick={() => {
                    alert('centro');
                    setShowModal(false);
                  }}
                >
                  centro
                </button>
                <button
                  className="w-1/3 p-4"
                  onClick={() => {
                    alert('direita');
                    setShowModal(false);
                  }}
                >
                  direita
                </button>
              </div>
              <button onClick={() => setShowModal(false)}>Fechar</button>
            </div>
          </div>
        )}
        {/* criar um modal que aparece quando o usuário clica no botão de remover uma tarefa */}
        <div className="w-5/12">
          <div className="rounded-md border border-sky-400 mt-3 h-96 pb-20">
            <h1 className="text-2xl font-bold flex justify-center mt-3">
              Inbox
            </h1>
            <ul className="mt-12">
              {/* criar um componente para cada item da lista de tarefas */}
              {tasks.map((task, index) => (
                <li key={task.id} className="mt-3">
                  {/* criar um componente para o input de edição */}
                  {
                    // se a tarefa estiver completa, mostrar o botão de marcar como incompleta, senão mostrar o botão de marcar como completa
                    task.completed ? (
                      <button
                        className="mr-2"
                        onClick={() => incompleteTask(task.id)}
                      >
                        ✅
                      </button>
                    ) : (
                      <button
                        className="mr-2 text-3xl"
                        onClick={() => completeTask(task.id)}
                      >
                        ◻︎
                      </button>
                    )
                  }
                  {
                    // se o index da tarefa for igual ao index da tarefa que está sendo editada, mostrar o input de edição
                    editIndex === index ? (
                      <input
                        className="rounded-md border-2 p-2 self-center border-amber-200"
                        type="text"
                        value={editValue}
                        onChange={e => setEditValue(e.target.value)}
                      />
                    ) : (
                      // criar um componente para o texto da tarefa
                      <span
                        // adicionar uma classe CSS para riscar o texto da tarefa quando ela estiver completa
                        className={`ml-12 cursor-pointer ${
                          task.completed ? 'line-through' : ''
                        }`}
                        // handleItemClicked é uma função que recebe o index da tarefa e chama a função setEditIndex com o index da tarefa
                        onClick={() => handleItemClicked(index)}
                      >
                        {task.text} - {task?.createdAt?.toLocaleDateString()}{' '}
                        {task?.createdAt?.toLocaleTimeString()} -
                        {task?.updatedAt?.toLocaleDateString()}{' '}
                        {task?.updatedAt?.toLocaleTimeString()}
                      </span>
                    )
                  }
                  <button className="ml-2" onClick={() => removeTask(task.id)}>
                    🗑️
                  </button>
                  {/* criar um componente para o botão de salvar a edição */}
                  {
                    // se o index da tarefa for igual ao index da tarefa que está sendo editada, mostrar o botão de salvar a edição
                    editIndex === index ? (
                      <button className="ml-2" onClick={handleEditSaveClick}>
                        💾
                      </button>
                    ) : (
                      <button
                        className="ml-2"
                        onClick={() => handleItemClicked(index)}
                      >
                        ✏️
                      </button>
                    )
                  }
                  <hr className="mr-3.5 ml-10" />
                </li>
              ))}
            </ul>
          </div>
          <input
            className="border-2 rounded-lg w-96 h-14 block p-6 ml-20 mt-10 bg-slate-100 shadow-lg shadow-zinc-800 border-slate-400 border-b-4"
            type="text"
            onChange={e => setInputValue(e.target.value)}
            placeholder="Pressione enter para adicionar alguma coisa"
            onKeyDown={handleInputKeyPress}
          />
        </div>
        <div
          className="
        mt-8 flex flex-col justify-start items-start content-between self-auto
        "
        >
          <ul className="">
            {lists.map(list => (
              <li
                key={list.number}
                className={`
                  hover:mt-2 hover:mb-2 bg-blue-400 px-3 rounded-r-lg mb-1
                  ${
                    pathname === `/${list.browsing}`
                      ? 'bg-blue-600 text-gray-200'
                      : 'hover:bg-gray-100'
                  }
                  `}
                // onClick={() => setSelectedItemOnList(list)}
              >
                <Link href={`/${list.browsing}`}>{list.name}</Link>
                {/* <span className="">{tasks.length}</span> */}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
