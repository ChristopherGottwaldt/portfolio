'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx'; // Optional but makes conditional classes cleaner

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/Projects' },
    { name: 'Blog', href: '/Blog' },
    { name: 'Art', href: '/Art' },
    { name: 'About', href: '/About' },
  ];

  return (
    <nav className="flex items-center gap-4 text-sm lg:gap-6">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={clsx(
            // 'transition-colors hover:text-blue-300',
            // pathname === item.href ? 'text-blue-400 font-semibold color-' : 'text-foreground'
            'px-3 py-1 rounded-md transition-colors hover:bg-blue-200 hover:text-black',
            pathname === item.href
              ? 'bg-blue-200 text-black font-semibold'
              : 'text-foreground'
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
