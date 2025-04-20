
import { cards } from "../constants/data.js";
import ProCard from "./ProCard";
import "./Projects.scss";

function Projects() {
  return (
    <div>
      <h1 className="projects-title">My Projects</h1>
      <div className="card">
        {cards.map((card) => (
          <ProCard key={card.id} data={card} />
        ))}
      </div>
    </div>
  );
}
export default Projects;

