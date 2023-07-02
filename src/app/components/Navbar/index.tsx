import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import NavItem from './NavItem';

type Menu = {
  text: string;
  href: string;
};

const MENU_LIST: Menu[] = [
  { text: 'Home', href: '/' },
  { text: 'Profile', href: '/profile' },
  { text: 'Contact', href: '/contact' },
];

const Navbar: React.FC = () => {
  const [navActive, setNavActive] = useState<boolean | null>(null);
  const [activeIdx, setActiveIdx] = useState<number>(-1);

  return (
    <header className=''>
      <nav className={`nav`}>
        <Link href={'/'}>
          <Image src='/logo.png' alt='logo' width={150} height={60} priority />
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? 'active' : ''} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
