import { Formik } from "formik";
import styles from "../styles/Contact.module.css";
const Contact = () => {
  return (
    <div className="bodyBox">
      <div className="titleHeader">
        <div className={styles.pageTitle}>Contact&nbsp;Me</div>
      </div>
      <div className="row">
        <h5>Social</h5>
        <div className="d-flex align-items-center">
          <div className=" d-inline-block">
            <div>Facebook</div>
            <div>Twitter</div>
            <div>LinkedIn</div>
          </div>
          <div className="d-inline-block">
            <Divider />
            <Divider />
            <Divider />
          </div>
          <div className=" d-inline-block">
            <div>https://www.facebook.com/myo.t.kha.79</div>
            <div>https://twitter.com/MyoThuKha6</div>
            <div>LinkedIn</div>
            {/* https://www.facebook.com/myo.t.kha.79/ */}
          </div>
        </div>
        <div>
          <h5>Github</h5>
          <div className="d-flex align-items-center">
            <div className=" d-inline-block">
              <div>Github</div>
            </div>
            <div className="d-inline-block">
              <Divider />
            </div>
            <div className=" d-inline-block">
              <div>https://www.github.com/MyoThuKha</div>
            </div>
          </div>
          <div></div>
        </div>
        <h5>Email</h5>
        <div className="d-flex align-items-center">
          <div className=" d-inline-block">
            <div>Personal</div>
            <div>School</div>
          </div>
          <div className="d-inline-block">
            <Divider />
            <Divider />
          </div>
          <div className=" d-inline-block">
            <div>myothukha.dev@gmail.com</div>
            <div>myothukha@ucsm.edu.mm</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Divider = ({ name, value }) => {
  return (
    <div className="ms-3 me-3 bg-black" style={{ width: 1, height: 30 }}></div>
  );
};

export default Contact;
