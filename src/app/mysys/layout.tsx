import React from 'react';
import Link from 'next/link';

export default function MysysLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // criar um componente para o layout da página
  return (
    <body className="flex flex-col h-screen">
      <header className="flex justify-between items-center p-3 bg-gray-200">
        <h1 className="text-2xl font-bold">mySys</h1>
        <div className="flex">
          <Link href={`/mysys`} className="p-2 bg-gray-100 rounded-lg">Inbox</Link>
        </div>
      </header>
      {children}
    </body>
  );
}
