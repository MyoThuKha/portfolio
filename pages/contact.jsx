import styles from "../styles/Contact.module.css";

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
            <div>
              <a
                className={styles.link}
                href="https://www.facebook.com/myo.tha.79"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
              <i className="bi bi-box-arrow-up-right"></i>
            </div>
            <div>
              <a
                className={styles.link}
                href="https://twitter.com/iam_myothukha"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
              <i className="bi bi-box-arrow-up-right"></i>
            </div>
            <div>
              <a
                className={styles.link}
                href="https://www.linkedin.com/in/myo-thu-kha-170077199"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <i className="bi bi-box-arrow-up-right"></i>
            </div>
          </div>
        </div>

        {/*  */}
        <div>
          <h5 className="mt-5">Gmail</h5>
          <div>myothukha.dev@gmail.com</div>
        </div>

        {/*  */}
        <h5 className="mt-5">Github</h5>
        <div>https://www.github.com/MyoThuKha</div>
      </div>
    </div>
  );
};

const Divider = ({ name, value }) => {
  return (
    <div
      className="ms-3 me-3 bg-black"
      style={{ width: 1.5, height: 30 }}
    ></div>
  );
};

export default Contact;
