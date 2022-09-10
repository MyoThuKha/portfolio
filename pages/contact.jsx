import { Formik } from "formik";
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
            <div>Facebook</div>
            <div>Twitter</div>
            <div>LinkedIn</div>
          </div>
        </div>

        {/*  */}
        <div>
          <h5 className="mt-5">Mail</h5>
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
