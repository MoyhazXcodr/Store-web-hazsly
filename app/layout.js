import './globals.css';

export const metadata = {
  title: 'Moyhaz Premium Store',
  description: 'Modern Class Digital Solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-bgMain text-textMain antialiased">
        {children}
      </body>
    </html>
  );
}
