import "../styles/globals.css";
import NavBar from "../components/navBar";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
function MyApp({ Component, pageProps }) {
  return (
    <div className="bodyBox">
      <NavBar></NavBar>
      <div className="ps-4 pe-3">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
