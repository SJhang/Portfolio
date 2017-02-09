import React from 'react';

const Footer = (props) => {
  return (
    <div className="global-footer">
      <div className="footer-content">
        <div className="top">
          <button className="btn"
            data-clipboard-target="sonik.jhang@utexas.edu"
            value="copy to clipboard">
          </button>
        </div>
        <div className="mid">Made by Sonik Jhang</div>
      </div>
    </div>
  );
};

export default Footer;
