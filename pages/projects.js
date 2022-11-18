import Image from "next/image";
import { motion } from "framer-motion";
import { titleVariant } from "../animation/homeVariant";

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
            <a
              className="display-1 aLink"
              href="https://recipes-myothukha.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Food Recipes
            </a>
            <hr />
            <a
              className="display-1 aLink"
              href="https://weather-myothukha.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Weather
            </a>
            <hr />
            <a
              className="display-1 aLink"
              href="https://cafe-myothukha.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Coffee
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
