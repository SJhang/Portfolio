import React from 'react';
import Links from './links';

class Intro extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentTitle: "Software Engineer",
      position: 1,
      class: "shake"
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ class: "hinge" })

      setTimeout(() => {
        this.updateClassList();
      }, 2000);
    }, 6000);
  }

  updateClassList() {
    let titleList = [
      "Software Engineer",
      "Front End Engineer",
      "Full Stack Engineer",
      "JavaScript Expert",
      "ReactJS Master",
      "Rails Professional",
      "SQL Proficient",
      "Korean"
    ];
    let pos = this.state.position;
    pos++;
    if (pos === titleList.length) pos = 0;
    let classList = [
      "zoomInDown",
      "zoomIn",
      "zoomInUp",
      "slideInLeft",
      "slideInRight",
      "bounceInUp",
      "rotateInDownLeft",
      "flipInX",
      "fadeInDown",
      "fadeInUp"
    ]
    setTimeout(() => {
      this.setState({
        position: pos,
        currentTitle: titleList[pos],
        class: this.randomString(classList)
      })
    }, 2000);
  }

  handleClick(e) {
    clearInterval(this.interval);
    this.updateClassList();
  };

  randomString(list) {
    let randomNum = Math.floor(Math.random() * list.length);
    return list[randomNum];
  }

  render () {
    return(
      <div className="text-center">
        <div className="intro animated fadeInUp">
          <h1>Sonik Jhang</h1>
          <h2
            className={`title animated ${this.state.class}`}
            onClick={(e) => this.handleClick(e)}>{this.state.currentTitle}</h2>
          <Links />
        </div>
      </div>
    )
  }
}

export default Intro;
