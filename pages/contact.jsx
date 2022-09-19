import styles from "../styles/Contact.module.css";
import { motion } from "framer-motion";
import { linkVariant } from "../animation/contactVariant";

const Contact = () => {
  return (
    <div className="bodyBox">
      <div className="titleHeader">
        <div className={styles.pageTitle}>Contact&nbsp;Me</div>
      </div>
      <div className="row">
        <h5 className="mt-5">Social</h5>
        <div className="d-flex align-items-center">
          <div className=" d-inline-block">
            <SocialLink
              name="Facebook"
              url="https://www.facebook.com/myo.tha.79"
            />
            <SocialLink
              name="Twitter"
              url="https://twitter.com/iam_myothukha"
            />
            <SocialLink
              name="LinkedIn"
              url="https://www.linkedin.com/in/myo-thu-kha-170077199"
            />
          </div>
        </div>

        {/*  */}
        <div>
          <h5 className="mt-5">Gmail</h5>
          <div>myothukha.dev@gmail.com</div>
        </div>

        {/*  */}
        <h5 className="mt-5">Github</h5>
        <SocialLink
          name="Myo Thu Kha"
          url="https://www.github.com/MyoThuKha
"
        />
      </div>
    </div>
  );
};

const SocialLink = ({ name, url }) => {
  return (
    <motion.div variants={linkVariant} whileHover="hover">
      <a className={styles.link} href={url} target="_blank" rel="noreferrer">
        {name}
      </a>
      <i className="bi bi-box-arrow-up-right"></i>
    </motion.div>
  );
};

export default Contact;
