import Link from "next/link";
import { motion } from "framer-motion";

const NavBar = () => {
  const styles = {
    backgroundColor: "#eeeff1",
  };

  const template = (href, text) => {
    return (
      <motion.div whileHover={{ scale: 1.2 }} className="d-inline-block">
        <Link href={href}>
          <a className="text-decoration-none text-dark fs-6 d-inline-block mx-2">
            {text}
          </a>
        </Link>
      </motion.div>
    );
  };
  return (
    <nav style={styles} className="navbar navbar-light  border-dark">
      <div className="container justify-content-between">
        {/* <div className="navbar-brand p-2">Myo Thu Kha</div> */}
        {template("/", "Home")}
        {template("/skills", "Skills")}
        {template("/projects", "Projects")}
        {template("/contact", "Contact Me")}
      </div>
    </nav>
  );
};

export default NavBar;
