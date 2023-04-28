import { sceneFastActionsIncomplete } from '@/app/scenarios/sceneFastActions';
import { lists } from '@/contants/lists';
import Link from 'next/link';

export default function FastAction() {
  return (
    <>
      <div className="flex justify-center">
        <div className="rounded-md border border-sky-400 mt-3 pb-20 ml-0 mr-0 w-5/12">
          <h1 className="text-2xl font-bold flex justify-center mt-3">
            Fast Action
          </h1>
          <ul className="mt-12">
            {sceneFastActionsIncomplete.map(fast => (
              <li key={fast.id} className="mt-3">
                <span className="ml-12">{fast.text}</span>
                {/* colocar uma linha horizontal */}
                <hr className="mr-3.5 ml-10" />
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 flex flex-col justify-start items-start content-between self-auto">
          <ul className="">
            {lists.map(list => (
              <li
                key={list.number}
                className="border bg-blue-400 px-3 rounded-r-lg"
              >
                <Link href={`/${list.browsing}`}>{list.name}</Link>
                {/* <span className="">{tasks.length}</span> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
