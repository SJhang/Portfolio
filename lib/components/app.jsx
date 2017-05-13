import React from 'react';
import Footer from './footer';
import Navbar from './nav';
import $ from 'jquery';

const App = ({ children }) => {

  const scrollTo = (div) => {
    let divOffset = $(`.${div}`).offset();
    return (
      $('html, body').animate({ scrollTop: (divOffset.top - 60) }, 'slow')
    );
  };

  const handleToggle = (e) => {
    let app = $('#app');
    app.toggleClass("toggled");
  };

  return (
    <div id="app">
      <Navbar scrollTo={div => scrollTo(div)}/>
      <button id="toggle-button" onClick={e => handleToggle(e)}>
        <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
      </button>
        {children}
      <Footer />
    </div>
  );
};

export default App;
