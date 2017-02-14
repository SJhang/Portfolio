import React from 'react';
import Links from './links';
let Clipboard = require('clipboard');

const Footer = (props) => {
  const email = new Clipboard('.email');

  return (
    <div className="global-footer">
      <div className="footer-content">
        <div className="top">
          <Links />
          <div className="clipboard-email">
            <input
              id="email"
              type="text"
              defaultValue="sonik.jhang@utexas.edu"/>
            <span className="clipboard-button">
              <button
                className="email"
                data-clipboard-target="#email"
                data-clipboard-action="copy">
                <img
                  className="clippy"
                  src="assets/clippy.svg"
                  alt="Copy to clipboard"></img>
              </button>
            </span>
          </div>
        </div>
        <div className="mid">The Digital Portfolio of Sonik Jhang</div>
      </div>
    </div>
  );
};

export default Footer;
