import React from 'react';
import Footer from './footer';
import Header from './header';

const App = ({ children }) => {

  const scrollTo = (div) => {
    let divOffset = $(`.${div}`).offset();
    return (
      $('html, body').animate({ scrollTop: (divOffset.top + 10) }, 'slow')
    );
  };

  return (
    <div className="app">
      <Header scrollTo={div => scrollTo(div)}/>
        {children}
      <Footer />
    </div>
  );
};

export default App;
