import "./Main2.css";
import arr from "../../../assets/arrow.png";

function Main2(props) {
  return (
    <>
      <section className="sec2">
        <div style={{ backgroundImage: `url(${props.img})` }}>
          <div className="text">
            <h2>{props.sectitle}</h2>
            <p>{props.by}</p>
            <div className="line"></div>
            <div className="arrow">
              <h3>READ STORY</h3>
              <img src={arr} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main2;
