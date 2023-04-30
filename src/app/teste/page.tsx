// criar uma página como se fosse um folha de caderno com linhas

export default function Teste() {
  return (
    <div className="container mx-auto px-4 md:px-10">
      <header className="py-4 md:py-6">
        <h1 className="text-2xl md:text-4xl font-bold">Título da página</h1>
      </header>
      <main className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 md:pr-8">
          <article className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Título do artigo
            </h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
              diam lectus.
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Leia mais
            </a>
          </article>
          <article className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Título do artigo
            </h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
              diam lectus.
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Leia mais
            </a>
          </article>
        </div>
        <aside className="w-full md:w-1/3">
          <h3 className="text-lg md:text-xl font-bold mb-4">Sidebar</h3>
          <ul className="mb-8">
            <li>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Link 1
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Link 2
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Link 3
              </a>
            </li>
          </ul>
          <div className="bg-gray-200 p-4 text-center">Anúncio</div>
        </aside>
      </main>
      <footer className="py-4 md:py-6">
        <p>&copy; 2023 Nome da empresa</p>
      </footer>
    </div>
  );
}
