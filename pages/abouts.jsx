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
      <section className=" pb-4">
        <article className="d-flex align-items-center justify-content-between">
          <motion.div variants={leftSideVariant}>
            <div style={{ width: 300, display: "inline-block" }}>
              <div className="lead mt-2 mb-2">Background</div>
              <div>
                I am a front-end engineer living in Myanmar. Currently, I am
                looking for a job to work with talented people around the world.
              </div>
            </div>
          </motion.div>
          <div style={{ height: 150 }} className=" d-lg-block d-none">
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
              I attend the university of computer studies in Mandalay.
              Currently, I am postponing my journey and start learning by myself
              cause of the covid and the various things happening in Myanmar.
            </div>
          </motion.div>
        </article>

        <article className="d-flex justify-content-end">
          <div>
            <motion.div variants={rightSideVariant} style={{ width: 350 }}>
              <div className="lead mt-4 mb-2">Skills</div>
              <div>
                I specialized in and love React and Next.js for Server-Side
                Rendering. As for styling, although I prefer Tailwind for
                styling and stuff, I use bootstrap as my second choice.
                Unfortunately, as for animation, I can only work with framer
                motion. As in mobile development, I first learned about Flutter.
                After working with flutter for about six months, I tried
                React-Native. Both are amazing tools to create cross-platform
                apps. Because of both React-Native and Flutter&apos;s
                flexibility, both are frameworks that I am happy to work with.
              </div>
            </motion.div>
          </div>
        </article>
        <article>
          <motion.div variants={leftSideVariant} style={{ width: 300 }}>
            <div className="lead mt-4 mb-2">Hobbies</div>
            <p>
              I love creating clean and beautiful UI applications and websites.
              I am willing to discuss newer technology with different people.
              Leetcode questions are my kryptonite and I use Vim in vs code. I
              love working with other developers and UI designers, so feel free
              to connect with me to build amazing stuff.
            </p>
          </motion.div>
        </article>
      </section>
    </motion.div>
  );
}
