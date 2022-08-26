import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.container}>
        <div className="row container justify-content-center align-items-center">
          <div className="col-6 ">
            <div className="container">
              <div className="fs-1 text-primary fw-bold">Hi,</div>
              <div className="fs-1 text-dark">
                I am <span className="text-dark">Myo Thu Kha</span>
              </div>
              <div className="text-dark mt-4">
                React JS developer
                <br /> consectetur adipisicing elit. Iure, quidem.
              </div>
            </div>
          </div>
          <div className="col-6">{/* <div>Signature</div> */}</div>
        </div>
      </div>
    </React.Fragment>
  );
}
