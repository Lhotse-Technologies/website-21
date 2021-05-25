import "../styles/globals.css";
import Menu from "../components/Layout/Menu";
import Footer from "../components/Common/Footer/Footer";

function MyApp({ Component, pageProps, navItems }) {
  return (
    <>
      <Menu navItems={navItems} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
