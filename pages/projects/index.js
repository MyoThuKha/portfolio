import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { titleVariant } from "../../animation/homeVariant";

const Projects = () => {
  return (
    <div>
      <div className="bodyBox">
        <motion.div
          variants={titleVariant}
          initial="before"
          animate="after"
          className="titleHeader"
        >
          Projects
        </motion.div>
        <div className="d-flex justify-content-between">
          <div style={{ width: 500 }}></div>
          <div>
            <div className=" display-1">Food Recipes</div>
            <hr />
            <div className=" display-1">Weather Website</div>
            <hr />
            <div className=" display-1"> Website</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
