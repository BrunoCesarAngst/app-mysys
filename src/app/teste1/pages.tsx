export default function Teste1() {
  return (
    <div className="min-h-screen w-full h-full flex flex-col container mx-auto overflow-auto">
      <header className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          <div></div>
          <nav className="bg-white shadow">
            <div className="container mx-auto py-4 px-8">
              <div className="flex justify-between items-center">
                <button className="text-gray-800 focus:outline-none lg:hidden">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="menu w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 4.75C2 4.33579 2.33579 4 2.75 4H17.25C17.6642 4 18 4.33579 18 4.75C18 5.16421 17.6642 5.5 17.25 5.5H2.75C2.33579 5.5 2 5.16421 2 4.75ZM2.75 8.5C2.33579 8.5 2 8.83579 2 9.25C2 9.66421 2.33579 10 2.75 10H17.25C17.6642 10 18 9.66421 18 9.25C18 8.83579 17.6642 8.5 17.25 8.5H2.75ZM2 12.25C2 11.8358 2.33579 11.5 2.75 11.5H17.25C17.6642 11.5 18 11.8358 18 12.25C18 12.6642 17.6642 13 17.25 13H2.75C2.33579 13 2 12.6642 2 12.25Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <div className="hidden lg:flex lg:items-center lg:w-auto">
                  <a
                    href="#"
                    className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Início
                  </a>
                  <a
                    href="#"
                    className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Sobre
                  </a>
                  <a
                    href="#"
                    className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contato
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden lg:hidden">
              <div className="px-2 pt-2 pb-3">
                <a
                  href="#"
                  className="block text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium"
                >
                  Início
                </a>
                <a
                  href="#"
                  className="block text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium"
                >
                  Sobre
                </a>
                <a
                  href="#"
                  className="block text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium"
                >
                  Contato
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <main className="flex-grow bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="sticky top-0 z-10 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
              Lista de tarefas
            </div>
          </div>
          <ul className="my-4 sm:my-6">
            <li className="px-4 py-4 sm:px-6 sm:py-5 flex justify-between items-center">
              <div className="min-w-0 flex-1">
                <div className="text-sm leading-5 font-medium text-gray-900 truncate">
                  Comprar leite
                </div>
                <div className="mt-1 flex items-center text-sm leading-5 text-gray-500">
                  <svg
                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span>Termina em 3 dias</span>
                </div>
              </div>
              <div className="ml-6 flex-shrink-0">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Editar
                </a>
              </div>
            </li>
            <li className="flex items-center text-gray-900 leading-tight sm:leading-normal text-sm">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-indigo-500 rounded-sm mr-2"
              />
              <span className="line-through">Tarefa concluída</span>
            </li>
            mais itens da lista aqui
          </ul>
        </div>
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <form>
              Campos do formulário aqui
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Título
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:ring ring-indigo-300 disabled:opacity-25 transition ease-in-out duration-150"
                >
                  Adicionar tarefa
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8">
          <ul className="divide-y divide-gray-200">
            <li className="px-4 py-4 sm:px-6 sm:py-5">Tarefa aqui</li>
            Adicione mais tarefas conforme necessário
          </ul>
        </div>
      </main>
      <footer className="fixed bottom-0 left-0 right-0 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex justify-center space-x-4">
            <button
              type="button"
              className="bg-indigo-500 hover:bg-indigo-400 text-white font-medium py-2 px-4 rounded text-sm"
            >
              Adicionar tarefa
            </button>
            <button
              type="button"
              className="bg-gray-300 hover:bg-gray-200 text-gray-600 font-medium py-2 px-4 rounded text-sm"
            >
              Concluir todas
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
