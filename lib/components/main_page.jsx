import React from 'react';
import $ from "jquery";

//components
import Intro from './intro';
import Projects from './projects';
import Assets from './assets';
import About from './about';
import Contact from './contact';

const Content = (props) => {
  const componentDidMount = () => {
    $(document).scrollTop(0);
  };

  const scrollTo = (div) => {
    return () => {
      let divOffset = $(`.${div}`).offset();
      $('html, body').animate({ scrollTop: (divOffset.top + 10) }, 'slow');
    };
  };

  return (
    <div className="main-content">
      <div className="contents">
        <Intro scrollTo={div => scrollTo(div)}/>
        <Projects scrollTo={div => scrollTo(div)}/>
        <Assets scrollTo={div => scrollTo(div)}/>
        <About scrollTo={div => scrollTo(div)}/>
        <Contact scrollTo={div => scrollTo(div)}/>
      </div>
    </div>
  );
};

export default Content;
