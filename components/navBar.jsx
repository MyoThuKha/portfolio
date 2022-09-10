import Link from "next/link";
import { motion } from "framer-motion";

const NavBar = () => {
  const template = (href, text) => {
    return (
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
          duration: 0.5,
        }}
        className="d-inline-block"
      >
        <motion.div whileHover={{ scale: 1.2 }}>
          <Link href={href}>
            <a
              style={{ fontFamily: "arial" }}
              className="text-decoration-none text-dark fs-6 d-inline-block mx-2"
            >
              {text}
            </a>
          </Link>
        </motion.div>
      </motion.div>
    );
  };
  return (
    <nav className="navbar navbar-light">
      <div className="container justify-content-between">
        {/* <div className="navbar-brand p-2">Myo Thu Kha</div> */}
        {template("/", "Home")}
        {template("/abouts", "About")}
        {template("/projects", "Projects")}
        {template("/contact", "Contact Me")}
      </div>
    </nav>
  );
};

export default NavBar;
