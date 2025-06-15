import "./main.css";

function Main(props) {
  return (
    <>
      <section style={{ flexDirection: props.flexDirection }}>
        <div
          className="text-area"
          style={{ backgroundColor: props.backgroundColor }}
        >
          <h2 style={{ color: props.color }}>{props.title}</h2>
          <p className="para" style={{ color: props.color }}>
            {props.para}
          </p>
          <div className="link-content">
            <p className="link" style={{ color: props.color }}>
              {props.link}
            </p>
            <img src={props.arrow} />
          </div>
        </div>
        <img src={props.photo} className="back-img" />
      </section>
    </>
  );
}

export default Main;