import React, { FC } from 'react';
import './Footer.scss'

const Footer: FC = () => {
  return (
    <section className="footer">
      <div className="row">
        <div className="col-xs-12">
          <h1 className="footer-text">© 2020 Sonarworks Inc. All rights reserved.</h1>
        </div>
      </div>
    </section>
  );
};

export default Footer;
