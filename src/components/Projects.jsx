import { cards } from "../constants/ProjectsData.js";
import ProCard from "./ProCard";
import "./Projects.scss";
import { motion } from "framer-motion";

function Projects() {
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
        className="projects-title"
        id="projects"
        initial="hidden"
        whileInView="visible"
        variants={variants}
        viewport={{ once: true, amount: 0.5 }}
      >
        My Projects
      </motion.h1>
      <motion.div
        className="cards"
        initial="hidden"
        whileInView="visible"
        variants={variants}
        viewport={{ once: true, amount: 0.5 }}
      >
        {cards.map((card) => (
          <ProCard key={card.id} data={card} />
        ))}
      </motion.div>
    </div>
  );
}
export default Projects;
