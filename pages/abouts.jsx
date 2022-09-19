import styles from "../styles/About.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { titleVariant } from "../animation/homeVariant";
import {
  leftSideVariant,
  rightSideVariant,
  nameVariant,
  nameVariant2,
} from "../animation/aboutVariant";

export default function About() {
  const [name, setName] = useState(false);
  return (
    <motion.div
      variants={titleVariant}
      initial="before"
      animate="after"
      className="bodyBox"
    >
      <div className="titleHeader">About</div>
      <section>
        <article className="d-flex align-items-center justify-content-between">
          <motion.div variants={leftSideVariant}>
            <div style={{ width: 300, display: "inline-block" }}>
              <div className="lead mt-2 mb-2">Background</div>
              <div>
                I am a front-end engineer currently living in Pakokku, Myanmar.
                I am looking for internships right now to work with experienced
                developers.
              </div>
            </div>
          </motion.div>
          <div style={{ height: 150 }}>
            <div
              style={{
                height: 100,
                backgroundColor: "pink",
                cursor: "pointer",
              }}
            >
              <AnimatePresence>
                {!name && (
                  <motion.div
                    variants={nameVariant}
                    exit={{
                      opacity: 0,
                      y: "150px",
                    }}
                    style={{ fontSize: 85 }}
                    className=" d-flex justify-content-end me-5"
                    onClick={() => setName(!name)}
                  >
                    မျိုးသုခ
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {name && (
                  <motion.div
                    variants={nameVariant2}
                    exit={{
                      opacity: 0,
                      y: "-150px",
                    }}
                    style={{ fontSize: 85 }}
                    className="d-flex justify-content-end me-5"
                    onClick={() => setName(!name)}
                  >
                    Myo Thu Kha
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </article>

        <article>
          <motion.div
            variants={leftSideVariant}
            style={{ width: 300 }}
            className=""
          >
            <div className="lead mt-4 mb-2">Education</div>
            <div>
              I attend the university of computer studies Mandalay. Currently, I
              am self-studying from home cause of the pandemic and the various
              things happening in Myanmar.
            </div>
          </motion.div>
        </article>

        <article className="d-flex justify-content-end">
          {/* <article className="d-flex align-items-center justify-content-between"> */}
          {/* <motion.div variants={arrowVariant}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="black"
              className="bi bi-arrow-down"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              />
            </svg>
          </motion.div> */}
          <div>
            <motion.div variants={rightSideVariant} style={{ width: 300 }}>
              <div className="lead mt-4 mb-2">Skills</div>
              <div>
                I am a front-end engineer specializing in react and next js. I
                use redux to clear and centralize the application state. For
                styling, I can use both Bootstrap and Tailwind CSS. I use framer
                motion for animating my projects. I also create android apps
                using cross-platform languages like React-native and Flutter.
                Hey, guess what? I am also fluent in python. And of course, last
                but not least, git for version control.
              </div>
            </motion.div>
          </div>
        </article>
        <article>
          <motion.div variants={leftSideVariant} style={{ width: 300 }}>
            <div className="lead mt-4 mb-2">Hobbies</div>
            <p>
              I love talking about computers and coding with other developers.
              Drinking tea while coding is one of my favorites. In my spare
              time, I watch some anime. One piece is awesome. I like eating
              bread fried with eggs and topped with a bit of sugar. I also like
              eating shan noodles for breakfast with chicken toppings.
            </p>
          </motion.div>
        </article>

        <h4></h4>
      </section>
    </motion.div>
  );
}
