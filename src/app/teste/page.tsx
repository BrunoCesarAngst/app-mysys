'use client';

export default function Teste() {
  // com tailwindcss faça esses passos colocando tons pastéis de azul e cinza em todos os elementos e responsivo para mobile:
  // criar um container que ocupe toda a tela
  // criar uma página com o nome Home que respeite a dimensionamento da tela
  // criar header com o nome do site e um botão de login ou logout
  // dividir a página em duas colunas
  // na primeira coluna com 1/3 do tamanho, com uma lista de links para outras páginas do site com o nome bem a esquerda e a quantidade de tarefas que tem nessa página bem a direita usando a altura da tela
  // na segunda coluna com 2/3 do tamanho, ter uma lista de tarefas editável que mostra o texto da tarefa, a data de criação e um botão para remover a tarefa, um botão para marcar a tarefa como completa ou incompleta e um botão para editar o texto da tarefa usando a altura da tela
  // abaixo da lista de tarefas, na base da coluna na parte de baixo, um form com o input para adicionar uma nova tarefa
  // criar o footer com o nome do site e o ano atual que esteja sempre no final da página e que respeite a largura da tela
  return (
    <div className="flex flex-col h-screen">
      <header className="flex-none h-16 bg-blue-200">
        <div className="flex items-center justify-between h-full px-4 mx-auto max-w-7xl">
          <h1 className="text-2xl font-bold">Site</h1>
          <button className="px-4 py-2 text-white bg-blue-500 rounded-md">
            Login
          </button>
        </div>
      </header>
      <main className="flex flex-1">
        <nav className="flex-none w-1/3 h-full bg-gray-200">
          <ul className="flex flex-col h-full">
            <li className="flex-none px-4 py-2 border-b border-gray-300">
              <a href="#">Home</a>
            </li>
            <li className="flex-none px-4 py-2 border-b border-gray-300">
              <a href="#">Tarefas</a>
            </li>
            <li className="flex-none px-4 py-2 border-b border-gray-300">
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>
        <section className="flex-1">
          <ul className="flex flex-col h-full">
            <li className="flex-none px-4 py-2 border-b border-gray-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 mr-2 text-blue-500 border border-gray-300 rounded-md"
                  />
                  <span className="text-lg">Tarefa 1</span>
                </div>
                <div className="flex items-center">
                  <button className="px-4 py-2 text-white bg-blue-500 rounded-md">
                    Editar
                  </button>

                  <button className="px-4 py-2 ml-2 text-white bg-red-500 rounded-md">
                    Remover
                  </button>
                </div>
              </div>
            </li>
            <li className="flex-none px-4 py-2 border-b border-gray-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 mr-2 text-blue-500 border border-gray-300 rounded-md"
                  />
                  <span className="text-lg">Tarefa 2</span>
                </div>
                <div className="flex items-center">
                  <button className="px-4 py-2 text-white bg-blue-500 rounded-md">
                    Editar
                  </button>

                  <button className="px-4 py-2 ml-2 text-white bg-red-500 rounded-md">
                    Remover
                  </button>
                </div>
              </div>
            </li>
          </ul>
          <form className="flex-none px-4 py-2 border-t border-gray-300">
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </form>
        </section>
      </main>
      <footer className="flex-none h-16 bg-blue-200">
        <div className="flex items-center justify-center h-full px-4 mx-auto max-w-7xl">
          <span>Site - 2021</span>
        </div>
      </footer>
    </div>
  );
}
