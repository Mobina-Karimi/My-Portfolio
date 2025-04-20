import "../layouts/Footer.scss"
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

function Footer() {
  const upToStartHandler = () => {
    const headerElement = document.getElementById("header");
    if (headerElement) {
      headerElement.scrollIntoView({ behavior: "smooth" });
    }
  }
  
  return (
    <div id="contact">
      <div className="contactMe">
        <h2>Get In Touch</h2>
        <h5>I am available to bring your ideas to life.</h5>
        <div className="social-links">
          <a href="#" target="_blank">
            <FaTwitter className="twitter"/>
          </a>
          <a href="https://instagram.com/mobina.karimi._" target="_blank">
            <IoLogoInstagram className="instagram"/>
          </a>
          <a href="https://linkedin.com/in/mobina-karimi87" target="_blank">
            <BiLogoLinkedin  className="linkedin"/>
          </a>
          <a href="https://github.com/Mobina-Karimi" target="_blank">
            <FaGithub className="github" />
          </a>
        </div>
        <small>© 2025 Mobina Karimi </small>
      </div>
      
      <a href="#header" className="headerLink" data-visible="true" onClick={upToStartHandler}>
        <span>Back to Top</span>
        <svg width="32" height="32" viewBox="0 0 100 100">
          <path fill=" #000000a8 " 
          d="m50 0c-13.262 0-25.98 5.2695-35.355 14.645s-14.645 22.094-14.645 35.355 5.2695 25.98 14.645 35.355 
          22.094 14.645 35.355 14.645 25.98-5.2695 35.355-14.645 14.645-22.094 
          14.645-35.355-5.2695-25.98-14.645-35.355-22.094-14.645-35.355-14.645zm20.832 62.5-20.832-22.457-20.625 
          22.457c-1.207 0.74219-2.7656 0.57812-3.7891-0.39844-1.0273-0.98047-1.2695-2.5273-0.58594-3.7695l22.918-25c0.60156-0.61328
          1.4297-0.96094 2.2891-0.96094 0.86328 0 1.6914 0.34766 2.293 0.96094l22.918 25c0.886721.2891
          0.6875 3.0352-0.47266 4.0898-1.1562 1.0508-2.9141 1.0859-4.1133 0.078125z ">
          </path>
        </svg>
      </a>
    </div>
  )
}

export default Footer