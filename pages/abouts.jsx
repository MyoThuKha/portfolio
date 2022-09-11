import styles from "../styles/About.module.css";
import { motion } from "framer-motion";
import { titleVariant } from "../animation/homeVariant";
import { leftSideVariant, rightSideVariant } from "../animation/aboutVariant";

export default function About() {
  return (
    <motion.div
      variants={titleVariant}
      initial="before"
      animate="after"
      className="bodyBox"
    >
      <div className="titleHeader">About</div>
      <section>
        <article>
          <motion.div
            variants={leftSideVariant}
            className="d-flex align-items-center justify-content-between"
          >
            <div style={{ width: 300, display: "inline-block" }}>
              <div className="lead mt-2 mb-2">Background</div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempore, et. Odit explicabo dolorem delectus unde, eos
                perspiciatis esse laborum! Nostrum.
              </div>
            </div>
            {/* <motion.div
              variants={rightSideVariant}
              style={{ fontSize: 85 }}
              className="d-inline-block me-5"
            >
              မျိုးသုခ
            </motion.div> */}
          </motion.div>
        </article>

        <article>
          <motion.div
            variants={leftSideVariant}
            style={{ width: 300 }}
            className=""
          >
            <div className="lead mt-4">Education</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis optio corporis sed beatae animi ipsum repellat tenetur
              iste illum aut.
            </div>
          </motion.div>
        </article>

        <article className="d-flex justify-content-end">
          <motion.div variants={rightSideVariant} style={{ width: 300 }}>
            <div className="lead mt-4 mb-2">Skills</div>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
              nostrum quae consectetur fugit delectus, dolorem magnam similique
              aspernatur? Soluta accusantium, architecto quaerat quo voluptatem
              debitis!
            </div>
          </motion.div>
        </article>
        <article>
          <motion.div variants={leftSideVariant} style={{ width: 300 }}>
            <div className="lead mt-4 mb-2">Hobbies</div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Suscipit, temporibus commodi necessitatibus facere itaque harum
              illum repellendus perferendis, ex voluptatum dolorum tempore
              aliquid deserunt quo earum cupiditate totam? Vitae obcaecati ad
              atque! Nisi maiores porro quo assumenda culpa facere in?
            </p>
          </motion.div>
        </article>

        <h4></h4>
      </section>
    </motion.div>
  );
}
