// criar um array de ações rápidas
const fastActions = [
  {
    id: 1,
    text: 'Task 1',
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
    discerned: true,
    completed: false,
    fastAction: true,
  },
  {
    id: 2,
    text: 'Task 2',
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
    discerned: true,
    completed: false,
    fastAction: true,
  },
  {
    id: 3,
    text: 'Task 3',
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
    discerned: true,
    completed: false,
    fastAction: true,
  },
  {
    id: 4,
    text: 'Task 4',
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
    discerned: true,
    completed: false,
    fastAction: true,
  },
];

export default function FastAction() {
  return (
    <>
      <h1 className="text-2xl font-bold flex justify-center mt-3">
        Fast Action
      </h1>
      <div className="rounded-md border border-sky-400 mx-80 mt-3 pb-12">
        <ul className="mt-12">
          {fastActions.map((fast, index) => (
            <li className="mt-3" key={index}>
              <span className="ml-12">{fast.text}</span>
              {/* colocar uma linha horizontal */}
              <hr className="mr-3.5 ml-10" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
