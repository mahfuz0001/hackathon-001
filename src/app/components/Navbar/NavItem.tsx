import Link from 'next/link';

type NavItemProps = {
  text: string;
  href: string;
  active?: boolean;
};

const NavItem: React.FC<NavItemProps> = ({ text, href, active }) => {
  return (
    <Link href={href} className={`nav__link`}>
      {text}
    </Link>
  );
};

export default NavItem;
