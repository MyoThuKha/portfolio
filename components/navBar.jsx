import Link from "next/link";

const NavBar = () => {
  const styles = {
    backgroundColor: "#e8c49f",
  };
  return (
    <nav
      style={styles}
      className="navbar navbar-light border-bottom border-dark"
    >
      <div className="container">
        <div className="navbar-brand p-2">Myo Thu Kha</div>
        <div className="">
          <Link href="/">
            <a className="text-decoration-none text-dark d-inline-block mx-2">
              Home
            </a>
          </Link>
          <Link href="/skills" className="text-dark d-inline-block mx-2">
            <a className=" text-decoration-none text-dark d-inline-block mx-2">
              Skills
            </a>
          </Link>
          <Link href="/projects">
            <a className="text-decoration-none text-dark d-inline-block mx-2">
              Projects
            </a>
          </Link>
          <Link href="">
            <a className="text-decoration-none text-dark d-inline-block mx-2">
              Contact Me
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
