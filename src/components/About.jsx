// import img from "../assets/MImg.png" 
import "../components/About.scss"
import CodeEditor from "./CodeEditor";

function About() {
  return (
    <div id="about">
    <h3 className="about-title">Who I Am</h3>

    <div className="about">
        <aside className="left">
            {/* <img src={img} alt=""/> */}
        </aside>

        <main>
            <div className="container">
                <div className="headerContainer">
                    <span className="redCircle"></span>
                    <span className="yellowCircle"></span>
                    <span className="greenCircle"></span>
                </div>
                <CodeEditor />
            </div>
        </main>
    </div>
</div>
  )
}

export default About