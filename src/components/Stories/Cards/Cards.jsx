import "./Card.css";
import arr from "../../../assets/arrow.png";

function Card(props) {
  return (
    <>
      <section className="card-container">
        <div style={{ backgroundImage: `url(${props.img})` }}>
          <div className="card-text">
            <p className="date">{props.date}</p>
            <h2>{props.secTitle}</h2>
            <p>{props.by}</p>
            <div className="card-line"></div>
            <div className="card-arrow">
              <h3>READ STORY</h3>
              <img src={arr} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Card;
