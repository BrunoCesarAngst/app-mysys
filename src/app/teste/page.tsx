'use client';

export default function Teste() {
  // com tailwindcss faça esses passos colocando tons pastéis de azul e cinza em todos os elementos:
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
      <header className="flex-none h-16 bg-gray-200">Header</header>
      <main className="flex flex-1">
        <nav className="flex-none w-1/3 h-full bg-blue-200">Nav</nav>
        <section className="flex-1 h-full bg-blue-100">Section</section>
      </main>
        {/* colocar o form na base da coluna na parte de baixo */}
        <form className="flex-none h-16 bg-gray-200">Form</form>
      {/* <footer className="flex-none h-16 bg-gray-200">Footer</footer> */}
    </div>
  );
}
