'use client';

import { sceneFastActionsIncomplete } from '@/app/scenarios/sceneFastActions';
import { List, lists } from '@/contants/lists';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function FastAction() {
  // estado para armazenar o item selecionado na lista
  const [selectedItemOnList, setSelectedItemOnList] = useState<List | null>(
    null
  );

  const pathname = usePathname();

  // uma função para verificar se um item está selecionado
  function isItemSelected(list: List) {
    return (
      selectedItemOnList !== null && selectedItemOnList.number === list.number
    );
  }

  return (
    <>
      <main className="flex justify-center">
        <div
          className="
        rounded-md border border-sky-400 mt-3 pb-20 h-96 w-5/12
        "
        >
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
