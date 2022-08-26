import "../styles/globals.css";
import NavBar from "../components/navBar";
import "bootstrap/dist/css/bootstrap.css";
import FooterBar from "../components/footBar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavBar></NavBar>
      <Component {...pageProps} />
      {/* <FooterBar></FooterBar> */}
    </div>
  );
}

export default MyApp;
