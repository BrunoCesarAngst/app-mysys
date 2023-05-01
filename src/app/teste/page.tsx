'use client';

import { useEffect, useRef } from 'react';

export default function Teste() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bodyHeight = document.body.clientHeight;
    const headerHeight = document.querySelector('header')?.clientHeight || 0;
    const footerHeight = document.querySelector('footer')?.clientHeight || 0;
    const mainHeight = bodyHeight - headerHeight - footerHeight;
    if (mainRef.current) {
      mainRef.current.style.height = `${mainHeight}px`;
    }
  }, []);

  return (
    <>
      <div className="flex-1 items-center justify-center bg-black">
        <header className=" fixed top-0 grid grid-cols-1 sm:grid-cols-3 w-full px-4 py-2 bg-red-300">
          oi
        </header>
        <main
          ref={mainRef}
          className="flex-1 grid grid-cols-1 md:grid-cols-none w-full mt-11 px-4 py-2 overflow-y-auto bg-gray-700"
        >
          <div className="space-y-6 mt-6">
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <hr className="" />
            <p>fim</p>
          </div>
        </main>
        <footer className="fixed bottom-0 grid grid-cols-1 sm:grid-cols-3 w-full px-4 py-2 bg-green-300 h-auto">
          oi
        </footer>
      </div>
    </>
  );
}
