import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./Main.scss";

const Main: FC = () => {
  return (
    <section className="main">
      <div className="row">
        <Link className="link" to="/privacy">
          Privacy Policy →
        </Link>
      </div>
      <div className="row">
        <Link className="link" to="/partnership">
          Partnership Policy →
        </Link>
      </div>
      <div className="row">
        <Link className="link" to="/terms">
          Terms and Conditions →
        </Link>
      </div>
      <div className="row">
        <Link className="link" to="/cookies">
          Sonarworks Cookies policy →
        </Link>
      </div>
      <div className="row">
        <Link className="link" to="/support">
          Support Service →
        </Link>
      </div>
      <div className="row">
        <Link className="link" to="/truefi">
          Sonarworks True-Fi privacy statement →
        </Link>
      </div>
    </section>
  );
};

export default Main;
