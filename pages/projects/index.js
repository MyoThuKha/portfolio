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
        <div className="d-flex justify-content-end">
          <div>
            <p className="display-1">Food Recipes</p>
            <hr />
            <p className="display-1">Weather</p>
            <hr />
            <p className="display-1">Website</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
