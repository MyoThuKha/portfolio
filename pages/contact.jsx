import { motion } from "framer-motion";
import hoverVariant from "../animation/hoverLink";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
      </Head>
      <div className="bodyBox">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ height: "80vh" }}
          className="d-flex align-items-center position-relative"
        >
          <section>
            <div className="d-flex justify-content-between">
              <SocialLink url="https://github.com/MyoThuKha" text="Github" />

              <SocialLink
                url="https://www.linkedin.com/in/myo-thu-kha-170077199"
                text="LinkedIn"
              />
            </div>
            <div>
              <h1 className=" display-1 py-5 fst-italic text-capitalize">
                Let collaborate together
              </h1>
              <div className="position-absolute">
                <h5 className="text-decoration-underline fs-4 py-2">Mail</h5>
                <SocialLink
                  url="mailto:myothukha.dev@gmail.com"
                  text="myothukha.dev@gmail.com"
                />
                <SocialLink url="mailto:myothukha@ucsm.edu.mm" text="School" />
              </div>

              <div className="position-absolute end-0 pe-2">
                <h5 className="text-decoration-underline fs-4 py-2">Social</h5>
                <SocialLink
                  url="https://www.facebook.com/myo.tha.79"
                  text="Facebook"
                />
                <SocialLink
                  url="https://twitter.com/iam_myothukha"
                  text="Twitter"
                />
                <SocialLink
                  url="https://www.reddit.com/u/Dramatic-Log-2064"
                  text="Reddit"
                />
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </>
  );
};

const SocialLink = ({ url, text }) => {
  return (
    <motion.div variants={hoverVariant} whileHover="hover">
      <a href={url} className="aLink" target="_blank" rel="noreferrer">
        {text}
      </a>
    </motion.div>
  );
};

export default Contact;
