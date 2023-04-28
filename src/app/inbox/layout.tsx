import { Inter } from 'next/font/google';
import Link from 'next/link';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'mySys',
  description: 'Um "todo list" mais power, feito com Next.js e TailwindCSS.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      {/* criar um componente para o layout da página */}
      {/* <body className={inter.className}>{children}</body> */}
      <body className="flex flex-col h-screen">
        <header className="flex justify-between items-center p-3 bg-gray-200">
          <h1 className="text-2xl font-bold">mySys</h1>
          <div className="flex">
            <Link href={`/inbox`} className="p-2 bg-gray-100 rounded-lg">
              Inbox
            </Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
