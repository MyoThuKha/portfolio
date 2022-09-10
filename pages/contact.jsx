import { Formik } from "formik";
import styles from "../styles/Contact.module.css";
const Contact = () => {
  return (
    <div className="bodyBox">
      <div className="titleHeader">
        <div className={styles.pageTitle}>Contact&nbsp;Me</div>
      </div>
      <div className="row">
        <div>
          <div>Social</div>
        </div>
        <div>
          <div>Github</div>
          <Divider />
          <div>https://github.com/MyoThuKha</div>
        </div>
        <div className=" d-flex align-items-center">
          <div className="d-inline-block ">Email </div>
          <Divider />
          <div className="d-inline-block me-4">myothukha.dev@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

const Divider = (key, value) => {
  return (
    <div className=" d-flex align-items-center">
      <div className="d-inline-block ">Email </div>
      <div
        className=" d-inline-block ms-3 me-3 bg-black"
        style={{ width: 1, height: 30 }}
      ></div>
      <div className="d-inline-block me-4">myothukha.dev@gmail.com</div>
    </div>
  );
};

export default Contact;
