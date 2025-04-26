import "./Skills.scss";
import { motion } from "framer-motion";
import { SkillsData } from "../constants/SkillsData.js";

function Skills() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  return (
    <div>
      <motion.h1
        id="skills"
        className="skills-title"
        initial="hidden"
        whileInView="visible"
        variants={variants}
        viewport={{ once: true, amount: 0.5 }}
      >
        My Skills
      </motion.h1>
      <div className="skillsContainer">
        {SkillsData.map((skills) => (
          <motion.div
            className="skillsCard"
            initial="hidden"
            whileInView="visible"
            variants={variants}
            viewport={{ once: true, amount: 0.5 }}
            key={skills.id}
          >
            <img src={skills.image} alt={skills.title} />
            <p>{skills.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
