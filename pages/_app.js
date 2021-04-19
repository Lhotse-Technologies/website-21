import "../styles/globals.css";
import Menu from "../components/Menu";

function MyApp({ Component, pageProps, navItems }) {
  return (
    <>
      <Menu navItems={navItems} />
      <div className="container mx-auto mt-12 px-12">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
