import Link from "next/link";

import { useRouter } from "next/router";

function Menu() {
  const { locale } = useRouter();
  return (
    <div className="container mx-auto">
      <header className="flex justify-between items-center py-8 md:px-12 px-4">
        <Link href="/">
          <>LHOTSE</>
        </Link>
        <Link href={"/"} locale={locale === "en" ? "de" : "en"}>
          {locale}
        </Link>
      </header>
    </div>
  );
}

export default Menu;
