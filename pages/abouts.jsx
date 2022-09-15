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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempore, et. Odit explicabo dolorem delectus unde, eos
                perspiciatis esse laborum! Nostrum.
                {/* I am an undergraduated computer science student from Mandalay. */}
              </div>
            </div>
          </motion.div>
          <div style={{ height: 150 }}>
            <div style={{ height: 100, backgroundColor: "pink" }}>
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
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis optio corporis sed beatae animi ipsum repellat tenetur
              iste illum aut. */}
              I attend the university of computer studies in Mandalay.
              Currently, I am self-studying from home because of covid and the
              junta happening in Myanmar.
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
                React and Next js for Frontend. Framer-motion for the Animation.
                Bootstrap and Tailwind for the styling. And react-native and
                flutter for the cross-platform development. Git is the plus
                skill.
                {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
                nostrum quae consectetur fugit delectus, dolorem magnam
                similique aspernatur? Soluta accusantium, architecto quaerat quo
                voluptatem debitis! */}
              </div>
            </motion.div>
          </div>
        </article>
        <article>
          <motion.div variants={leftSideVariant} style={{ width: 300 }}>
            <div className="lead mt-4 mb-2">Hobbies</div>
            <p>
              I like reading One Piece and listening to Bohemian Rhapsody . I
              love eating Shan Noodles.
              {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Suscipit, temporibus commodi necessitatibus facere itaque harum
              illum repellendus perferendis, ex voluptatum dolorum tempore
              aliquid deserunt quo earum cupiditate totam? Vitae obcaecati ad
              atque! Nisi maiores porro quo assumenda culpa facere in? */}
            </p>
          </motion.div>
        </article>

        <h4></h4>
      </section>
    </motion.div>
  );
}
