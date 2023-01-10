import clsx from 'clsx';
import Link from 'next/link';

function Navbar() {
  const navClassNames = clsx([
    'flex items-center justify-between',
    'w-full h-12',
    'px-4',
    'sticky top-0 z-50',
    'bg-white shadow-sm',
  ]);

  return (
    <nav className={navClassNames}>
      <Link href="/">
        <h3>Hendra Sadewa</h3>
      </Link>
      <ul className="flex gap-2">
        <li>
          <a href="/posts/about">About</a>
        </li>
        <li>
          <a href="/posts/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
