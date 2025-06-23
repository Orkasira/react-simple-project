import "./FeatMain.css";
import img from "../../../assets/feat.png";

function FeatMain() {
  return (
    <>
      <section className="featMain">
        <div className="featMain-back">
          <div className="featMain-text">
            <h1>FEATURES</h1>
            <p>
              We make sure all of our features are designed to be loved by every
              aspiring and even professional photograpers who wanted to share
              their stories.
            </p>
          </div>
        </div>
        <img src={img} alt="" className="featMain-img" />
      </section>
    </>
  );
}

export default FeatMain;
