import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { titleVariant } from "../animation/homeVariant";
import { useState } from "react";
import opacityVariant from "../animation/opacity";
import Head from "next/head";

const Projects = () => {
  const [image, setImage] = useState("");
  const space = () => {
    if (image === "/weather.png") return "margin1";
    else if (image === "/cafe.png") return "margin2";
    return "";
  };
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <div className="bodyBox position-relative">
        <motion.div
          variants={titleVariant}
          initial="before"
          animate="after"
          className="titleHeader"
        >
          Projects
        </motion.div>
        <div className="d-flex text-center justify-content-center text-lg-start justify-content-lg-end">
          <AnimatePresence>
            {image !== "" && (
              <motion.div
                variants={opacityVariant}
                initial="before"
                animate="after"
                exit="exit"
                className={"position-relative imageBox d-flex " + space()}
              >
                <Image
                  src={image}
                  alt="preview"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </motion.div>
            )}
          </AnimatePresence>
          <div>
            <a
              className="display-1 aLink"
              href="https://recipes-myothukha.vercel.app"
              target="_blank"
              rel="noreferrer"
              onMouseOver={() => setImage("/recipes.png")}
              onMouseLeave={() => setImage("")}
            >
              Food Recipes
            </a>
            <hr />
            <a
              className="display-1 aLink"
              href="https://weather-myothukha.vercel.app"
              target="_blank"
              rel="noreferrer"
              onMouseOver={() => setImage("/weather.png")}
              onMouseLeave={() => setImage("")}
            >
              Weather
            </a>
            <hr />
            <a
              className="display-1 aLink"
              href="https://cafe-myothukha.vercel.app"
              target="_blank"
              rel="noreferrer"
              onMouseOver={() => setImage("/cafe.png")}
              onMouseLeave={() => setImage("")}
            >
              Coffee
            </a>
          </div>
        </div>
        {/* <div className="text-center position-absolute psnCustom">
          <motion.a
            variants={hoverVariant}
            whileHover="hover"
            href="https://github.com/MyoThuKha"
            target="_blank"
            rel="noreferrer"
            className="aLink"
          >
            See More
          </motion.a>
        </div> */}
      </div>
    </>
  );
};

export default Projects;
