import "../styles/globals.css";
import NavBar from "../components/navBar";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
function MyApp({ Component, pageProps }) {
  return (
    <div style={{ backgroundColor: "#eeeff1" }}>
      <NavBar></NavBar>
      <div className="ps-4 pe-3 bodyBox">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
