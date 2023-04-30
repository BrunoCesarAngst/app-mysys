import { Inter } from 'next/font/google';
import './globals.css';

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
      <body className="h-full">{children}</body>
    </html>
  );
}
