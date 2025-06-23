import "./footer.css";
import logo from "../../../assets/whitelogo.png";
import { Link } from "react-router-dom";
import arrow from "../../../assets/arrow.png";

function Footer() {
  return (
    <>
      <section className="footer-container">
        <div className="footer-content">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="logos">
            <Link
              to="https://www.facebook.com/"
              target="_blink"
              className="fb"
            ></Link>
            <Link
              to="https://www.youtube.com/"
              target="_blink"
              className="yt"
            ></Link>
            <Link to="https://x.com/" target="_blink" className="tw"></Link>
            <Link
              to="https://www.pinterest.com/"
              target="_blink"
              className="pint"
            ></Link>
            <Link
              to="https://www.instagram.com/"
              target="_blink"
              className="ig"
            ></Link>
          </div>
        </div>
        <div className="links">
          <Link to="/" className="foot-nav">
            HOME
          </Link>
          <Link to="/Stories" className="foot-nav">
            STORIES
          </Link>
          <Link to="/Features" className="foot-nav">
            FEATURES
          </Link>
        </div>
        <div className="foot-right">
          <div className="foot-inv">
            <p className="arrow">GET AN INVITE</p>
            <img src={arrow} alt="" />
          </div>
          <p className="copy">Copyright 2019. All Rights Reserved</p>
        </div>
      </section>
    </>
  );
}

export default Footer;
