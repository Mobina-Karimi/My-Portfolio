import img from "../assets/header.jpg" 
import pdfFile from "../assets/MobinaKarimi.pdf" 
import "../layouts/Header.scss"

function Header() {
    const downloadHandler = () => {
        const link = document.createElement("a");
        link.href = pdfFile;
        link.download = "MobinaKarimi.pdf";
        link.click();
    };
    
    
    const contactHandler = () => {
        const contactElement = document.getElementById("contact");
        if (contactElement) {
            contactElement.scrollIntoView({ behavior: "smooth" });
        }
    };
    
  return (
    <div className="header" id="header">    
        <img src={img} alt="headerImg"/>
        <nav className="navbar">
            <ul className="navList">
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Skills</li>
                <li className="contact" onClick={contactHandler}>.Contact&#123;&#125;</li>
            </ul>
            <button onClick={downloadHandler} >Resume</button>
        </nav>
    
        <div className="txt-header">
            <h5>welcome</h5>
            <h1>I'm Mobina Karimi</h1>
            <p>A Front-End Web Developer</p>
        </div>
    </div>
  )
}

export default Header