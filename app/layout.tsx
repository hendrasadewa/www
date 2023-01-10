import './globals.css';
import Navbar from './Navbar';

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="id">
      <body className="min-h-screen">
        <main>{children}</main>
      </body>
    </html>
  );
}
