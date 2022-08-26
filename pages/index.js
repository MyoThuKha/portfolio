import Head from "next/head";
import NavBar from "../components/navBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className="container">
        <div className="fs-1 text-primary fw-bold">Hi,</div>
        <div className="fs-1 text-dark">
          I am <span className="text-dark">Myo Thu Kha</span>
        </div>
        <div className="text-dark mt-4">
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipisicing elit. Iure, quidem.
        </div>
      </div>
    </div>
  );
}
