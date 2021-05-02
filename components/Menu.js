import Link from 'next/link';

import { useRouter } from 'next/router';

function Menu({ navItems, menuItems, callToActionButton }) {
  const { locale } = useRouter();
  return (
    <div className="container mx-auto">
      <header className="flex justify-between items-center py-8 md:px-12 px-4">

      <Link href="/"><>LHOTSE</></Link>

      {menuItems.map((item, index) => (
        <Link href={`${item.route}`}><a key={index}>{item.title}</a></Link>
      ))}

      <Link href={"/"} locale={locale === "en" ? "de" : "en"}>
        {locale}
      </Link>

      <button className="btn">{callToActionButton}</button>
      </header>
    </div>
  );
}

export default Menu;
