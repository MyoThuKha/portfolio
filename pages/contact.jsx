import styles from "../styles/Contact.module.css";
import { motion } from "framer-motion";
import { linkVariant } from "../animation/contactVariant";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="bodyBox">
      <div className="titleHeader">
        <div className={styles.pageTitle}>Contact&nbsp;Me</div>
      </div>

      <div className="row">
        <section className="col justify-content-center">
          <h4>Social</h4>
          <div className="d-flex">
            <SocialLink url="https://www.facebook.com/myo.tha.79">
              Facebook
            </SocialLink>
          </div>
          <div className="d-flex">
            <SocialLink url="https://twitter.com/iam_myothukha">
              Twitter
            </SocialLink>
          </div>
          <div className="d-flex">
            <SocialLink url="https://www.linkedin.com/in/myo-thu-kha-170077199">
              LinkedIn
            </SocialLink>
          </div>
          
        </section>
        <section
          style={{ height: "50vh" }}
          className="col border border-2 border-dark"
        >
          <div className={styles.hello}>Hello</div>
          <h3>To</h3>
          <a href="mailto:myothukha.dev@gmail.com" className={styles.link}>
            myothukha.dev@gmail.com
          </a>
          <hr />
          <hr />
          <hr />
          <hr />
          <div></div>
        </section>
      </div>
    </div>
  );
};

const SocialLink = ({ url, children }) => {
  return (
    <motion.div variants={linkVariant} whileHover="hover" className="d-flex">
      <div className={styles.link}>
        <Link href={url}>
          <a className={styles.link} target="_blank" rel="noreferrer">
            {children}
          </a>
        </Link>
      </div>
      <motion.div>
        <i className="bi bi-box-arrow-up-right"></i>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
