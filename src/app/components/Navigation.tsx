'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="nav-container">
      <Link href="/" className="nav-logo">
        dg.tools
      </Link>
      <div className="nav-links">
        <Link 
          href="/" 
          className="nav-link"
          data-active={pathname === '/'}
        >
          VeloTime Demo
        </Link>
        <a 
          href="/velotime/index.html" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-lg font-bold text-sm shadow-sm transition-colors ml-4"
        >
          Log In to App
        </a>
      </div>
    </nav>
  );
}
