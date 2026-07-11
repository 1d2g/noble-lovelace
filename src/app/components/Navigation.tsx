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
          Home
        </Link>
        <Link 
          href="/stream" 
          className="nav-link"
          data-active={pathname === '/stream'}
        >
          Stream
        </Link>
        <Link 
          href="/toolbox" 
          className="nav-link"
          data-active={pathname === '/toolbox'}
        >
          Toolbox
        </Link>
      </div>
    </nav>
  );
}
