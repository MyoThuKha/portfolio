import Head from "next/head";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import {
  titleVariant,
  textVariant,
  hoverVariant,
  boxVariant,
} from "../animation/homeVariant";

export default function Home() {
  const [circle, setCircle] = useState(false);
  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <motion.div
        variants={titleVariant}
        initial="before"
        animate="after"
        className="bodyBox"
      >
        <div className="titleHeader">Home&nbsp;Page</div>

        {/* introduction */}
        <motion.div variants={textVariant} className={styles.text}>
          <span className="">Hi</span> my name is
          <br />
          <motion.div
            variants={hoverVariant}
            whileHover="hover"
            className="d-inline-block fs-3 pb-3"
          >
            Myo Thu Kha
          </motion.div>
          <div className={styles.text}>I am a Frontend Developer</div>
        </motion.div>

        <motion.div
          variants={boxVariant}
          style={{ marginRight: "100px" }}
          className="d-flex container justify-content-end d-none d-md-flex d-lg-flex"
          onDoubleClick={() => {
            setCircle(!circle);
          }}
        >
          {circle && (
            <motion.div
              variants={hoverVariant}
              whileHover="hover"
              drag
              dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
              dragElastic={1}
              className="circleBox"
            ></motion.div>
          )}
          {!circle && (
            <motion.div
              variants={hoverVariant}
              whileHover="hover"
              drag
              dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
              dragElastic={1}
              className="rectangleBox"
            ></motion.div>
          )}
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
}
