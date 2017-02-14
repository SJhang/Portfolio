import React from 'react';

const Contact = ({scrollTo}) => {
  const openEmail = () => {
    location.href = "mailto:sonik.jhang@utexas.edu";
  };

  return (
    <div className="contact">
      <div className="contact-title">
        CONTACT
      </div>
      <div className="contact-info">
        <div
          className="contact-spec"
          onClick={() => openEmail()}>
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <h2>sonik.jhang@utexas.edu</h2>
        </div>
        <div className="contact-spec">
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          <h2>San Francisco, CA</h2>
        </div>
        <div className="contact-spec">
          <i className="fa fa-phone" aria-hidden="true"></i>
          <h2>512 850-2709</h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
