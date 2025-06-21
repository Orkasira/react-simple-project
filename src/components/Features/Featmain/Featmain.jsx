import "./Featmain.css";
import img from "../../../assets/feat.png";

function Featmain() {
  return (
    <>
      <section className="featmain">
        <div className="featmain-back">
          <div className="featmain-text">
            <h1>FEATURES</h1>
            <p>
              We make sure all of our features are designed to be loved by every
              aspiring and even professional photograpers who wanted to share
              their stories.
            </p>
          </div>
        </div>
        <img src={img} alt="" className="featmain-img" />
      </section>
    </>
  );
}

export default Featmain;
