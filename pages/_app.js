import "../styles/globals.css";
import NavBar from "../components/navBar";
import "bootstrap/dist/css/bootstrap.css";
import FooterBar from "../components/footBar";

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ backgroundColor: "#eeeff1" }}>
      <NavBar></NavBar>
      <div className="ps-4 pe-3">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
