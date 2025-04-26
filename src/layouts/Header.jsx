import "./Header.scss";
import img from "../assets/header.jpg";
import { motion } from "framer-motion";
import pdfFile from "../assets/MobinaKarimi.pdf";

function Header() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const downloadHandler = () => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "MobinaKarimi.pdf";
    link.click();
  };

  return (
    <header className="header" id="header">
      <div className="overlay"></div>
      <img src={img} alt="Header Background" />
      <nav className="navbar">
        <ul className="navList">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">.Contact&#123;&#125;</a>
          </li>
        </ul>
        <button onClick={downloadHandler}>Download Resume</button>
      </nav>
      <div className="text-content">
        <motion.h1 initial="hidden" whileInView="visible" variants={variants}>
          Hi, I'm <span>Mobina Karimi</span>
        </motion.h1>
        <motion.p initial="hidden" whileInView="visible" variants={variants}>
          Transforming ideas into beautiful web experiences.
        </motion.p>
      </div>

      <nav className="bottomNav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
