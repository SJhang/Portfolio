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

  return (
    <div className="container-fluid">
      <Navbar scrollTo={div => scrollTo(div)}/>
        {children}
      <Footer />
    </div>
  );
};

export default App;
