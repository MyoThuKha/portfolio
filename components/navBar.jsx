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
            <div className="text-dark d-inline-block mx-2">Home</div>
          </Link>
          <Link href="">
            <div className="text-dark d-inline-block mx-2">Skills</div>
          </Link>
          <Link href="">
            <div className="text-dark d-inline-block mx-2">Projects</div>
          </Link>
          <Link href="">
            <div className="text-dark d-inline-block mx-2">Contact Me</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
