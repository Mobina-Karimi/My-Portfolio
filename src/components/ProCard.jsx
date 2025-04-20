
import "./ProCard.scss";

function ProCard({ data }) {
  const { title, image, language,text } = data;
  return (
    <div className="cardContainer">
    <div className="card">
        <div className="face face1">
            <div className="content">
            <img src={image} alt="CardImg"/>
                <h3>{title}</h3>
            </div>
        </div>
        <div className="face face2">
            <div className="content">
                <p>{text}</p>
                {/* <a href="#">Read More</a> */}
                {/* <div>{language}</div> */}
                {language.map((lan,index)=><span key={index}>{lan}</span>)}
            </div>
        </div>
    </div>
</div>
  );
}
export default ProCard;

