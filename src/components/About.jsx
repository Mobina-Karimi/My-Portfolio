import React from "react";
import { motion } from "framer-motion";
import img from "../assets/m.jpg";
import "../components/About.scss";
import CodeEditor from "./CodeEditor";

function About() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div id="about">
      <motion.h1
        className="about-title"
        initial="hidden"
        whileInView="visible"
        variants={variants}
        viewport={{ once: true, amount: 0.5 }}
      >
        Who I Am
      </motion.h1>

      <div className="about">
        <main>
          <motion.div
            className="container"
            initial="hidden"
            whileInView="visible"
            variants={variants}
            viewport={{ once: true, amount: 0.5 }}
            >
            <div className="headerContainer">
              <span className="redCircle"></span>
              <span className="yellowCircle"></span>
              <span className="greenCircle"></span>
            </div>
            <CodeEditor />
          </motion.div>
        </main>

        <aside>
          <motion.div
            className="box"
            initial="hidden"
            whileInView="visible"
            variants={variants}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="pictureCard">
              <div className="imgBx">
                <motion.img
                  src={img}
                  alt="MyImage"
                  initial={{ scale: 1.01 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="details">
                <motion.h2
                  initial="hidden"
                  whileInView="visible"
                  variants={variants}
                  viewport={{ once: true }}
                >
                  Mobina Karimi
                  <br />
                  <motion.span
                    initial="hidden"
                    whileInView="visible"
                    variants={variants}
                  >
                    Front-end Developer
                  </motion.span>
                </motion.h2>
              </div>
            </div>
          </motion.div>
        </aside>
      </div>
    </div>
  );
}

export default About;
