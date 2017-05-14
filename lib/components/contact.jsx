import React from 'react';

const Contact = ({scrollTo}) => {
  const openEmail = () => {
    location.href = "mailto:sonik.jhang@utexas.edu";
  };

  const handlePhoneCall = () => {
    location.href = "tel:+15128502709";
  }
  return (
    <div className="contact">
      <h1>CONTACT</h1>
      <div className="contact-info">
        <div
          className="contact-spec"
          onClick={() => openEmail()}>
          <i className="fa fa-envelope fa-3x animated infinite rubberBand" aria-hidden="true"></i>
          <h4>sonik4595@gmail.com</h4>
        </div>
        <div className="contact-spec">
          <i className="fa fa-map-marker fa-3x animated infinite bounce" aria-hidden="true"></i>
          <h4>San Francisco, CA</h4>
        </div>
        <div className="contact-spec" onClick={() => handlePhoneCall()}>
          <i className="fa fa-phone fa-3x animated infinite shake" aria-hidden="true"></i>
          <h4>512 850-2709</h4>
        </div>
      </div>
    </div>
  );
};

export default Contact;
