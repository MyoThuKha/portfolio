import Head from "next/head";
import { motion } from "framer-motion";
import {
  titleVariant,
  textVariant,
  boxVariant,
} from "../animation/homeVariant";
import hoverVariant from "../animation/hoverLink";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <motion.div
        variants={titleVariant}
        initial="before"
        animate="after"
        className="bodyBox position-relative overflow-hidden"
      >
        <div className="titleHeader">Home&nbsp;Page</div>

        {/* introduction */}
        <motion.div variants={textVariant}>
          Hi my name is
          <br />
          <motion.div
            variants={hoverVariant}
            whileHover="hover"
            className="d-inline-block fs-2 pb-1"
          >
            Myo Thu Kha
          </motion.div>
          <div>I am a Software Developer</div>
        </motion.div>

        <motion.div
          variants={boxVariant}
          style={{ marginRight: "100px" }}
          className="d-flex container ms-5 ms-lg-0 mt-5 mt-lg-0 justify-content-end d-flex"
        >
          <motion.div
            variants={hoverVariant}
            whileHover="hover"
            drag
            // dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            dragElastic={1}
            whileTap={{ scale: 0.8, borderRadius: "100%" }}
            className="rectangleBox"
          ></motion.div>
        </motion.div>
        {/* <div className="d-flex container justify-content-end d-none d-md-flex d-lg-flex">
          <Image src="/circle.svg" alt="icon" width={300} height={300} />
        </div> */}
      </motion.div>
    </>
  );
}
