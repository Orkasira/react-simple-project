import "./FeatLast.css";

function FeatLast(props) {
  return (
    <>
      <div className="logo-div">
        <img src={props.logo} />
        <h2>{props.thrTitle}</h2>
        <p>{props.para}</p>
      </div>
    </>
  );
}

export default FeatLast;
