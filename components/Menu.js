import Link from 'next/link';

import { useRouter } from 'next/router';

function Menu({ navItems, menuItems, callToActionButton }) {
  const { locale } = useRouter();
  return (
    <div className="container mx-auto">
      <header className="flex justify-between items-center py-8 md:px-12 px-4">
        {menuItems.map((item, index) => (
          <p key={index}>{item.title}</p>
        ))}
      </header>
    </div>
  );
}

export default Menu;
