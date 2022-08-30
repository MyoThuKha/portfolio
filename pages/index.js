import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

const titleVariant = {
  before: {
    opacity: 0,
  },
  after: {
    opacity: 1,
    transition: {
      duration: 1.1,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};
const textVariant = {
  before: {
    opacity: 0,
    x: "-100vw",
  },
  after: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
    },
  },
};
const nameVariant = {
  hover: {
    scale: 1.1,
    originX: 0,
  },
};
const boxVariant = {
  before: {
    opacity: 0,
    y: "-100vh",
  },
  after: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
    },
  },
};
export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <motion.div
        variants={titleVariant}
        initial="before"
        animate="after"
        className={styles.container}
      >
        <div className={styles.pageTitle}>Home Page</div>

        {/* introduction */}
        <motion.div variants={textVariant} className={styles.text}>
          <span className="">Hi</span> my name is
          <br />
          <motion.div
            variants={nameVariant}
            whileHover="hover"
            className="d-inline-block fs-3 pb-4"
          >
            Myo Thu Kha
          </motion.div>
          <div className={styles.text}>I am a Frontend Developer</div>
        </motion.div>

        <motion.div
          variants={boxVariant}
          className="d-flex container justify-content-end"
        >
          <motion.div
            drag
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            dragElastic={1}
            className={styles.box}
          ></motion.div>
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
}
