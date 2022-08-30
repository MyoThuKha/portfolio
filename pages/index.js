import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
const textVariant = {
  hover: {
    scale: 1.1,
  },
};
export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.pageTitle}>Home Page</div>

        {/* introduction */}
        <div className={styles.text}>
          <span className="">Hi</span> my name is{" "}
          <motion.div
            whileHover={{
              scale: 1.1,
              originX: 0,
            }}
            className="fs-3 pb-4"
          >
            Myo Thu Kha
          </motion.div>
        </div>
        <div className={styles.text}>I am a Frontend Developer</div>
      </div>
    </React.Fragment>
  );
}
