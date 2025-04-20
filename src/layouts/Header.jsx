import "./Header.scss";
import img from "../assets/header.jpg";
import pdfFile from "../assets/MobinaKarimi.pdf";

function Header() {
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
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">.Contact&#123;&#125;</a></li>
                </ul>
                <button onClick={downloadHandler}>Download Resume</button>
            </nav>
            <div className="text-content">
                <h1>Hi, I'm <span>Mobina Karimi</span></h1>
                <p>Transforming ideas into beautiful web experiences.</p>
            </div>
        </header>
    );
}

export default Header;
