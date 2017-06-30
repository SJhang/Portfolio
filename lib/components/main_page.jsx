import React from 'react';
import $ from "jquery";

//components
import Intro from './intro';
import Projects from './projects';
import Assets from './assets';
import About from './about';
import Contact from './contact';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDiv: "intro"
    }

    this.onEnterPage = this.onEnterPage.bind(this);
  }

  componentDidMount() {
    // $(document).ready(() =>
    //   $(window).scroll(() => {
    //     if () {
    //       debugger;
    //       this.handleNavToggle('projects');
    //     } else if (this.onEnterPage('assets')) {
    //       debugger;
    //       this.handleNavToggle('assets');
    //     } else if (this.onEnterPage('about')) {
    //       debugger;
    //       this.handleNavToggle('about');
    //     } else if (this.onEnterPage('contact')) {
    //       debugger;
    //       this.handleNavToggle('contact');
    //     }
    //   })
    // )
  }

  onEnterPage(div) {
    let scrollPos = Math.round($(window).scrollTop()) + 60;
    let targetDivOffset = Math.floor($(`.${div}`).offset().top);
    if (scrollPos >= targetDivOffset) {
      $(`.${div}-li`).toggleClass('focused');
      this.setState({ currentDiv:div });
    }
  };

  render () {
    return (
      <div className="container-fluid main-content">
        <Intro />
        <Projects />
        <Assets />
        <About />
        <Contact />
      </div>
    );
  }
}

export default MainPage;
