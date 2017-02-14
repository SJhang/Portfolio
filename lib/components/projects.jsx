import React from 'react';
import $ from 'jquery';

const Projects = ({scrollTo}) => {
  const scrollPosition = $(window).scrollTop();
  const stickerIndicator = () => {
  };

  const directToMeetup = () => {
    return window.open("https://meet-ups.herokuapp.com/#/");
  };

  const directToMeetupGithub = () => {
    return window.open("https://github.com/SJhang/Meetups");
  };

  const directToFrozen = () => {
    return window.open("https://sjhang.github.io/Frozen-Milk/");
  };

  const directToFrozenGitHub = () => {
    return window.open("https://github.com/SJhang/Frozen-Milk");
  };

  const directToOvertrack = () => {
    return window.open("http://www.overtrack.win/");
  };

  const directToOvertrackGithub = () => {
    return window.open("https://github.com/Sebastiansc/Overtrack");
  };

  return (
    <div className="projects">
      <h1 className="title-project">Projects</h1>
      <div className="project-div">
        <div className="meetups">
          <div className="description">
            <div className="project-name">
              <h1>MeetUps</h1>
              <div className="projects-links">
                <i
                  className="fa fa-github fa-1x"
                  aria-hidden="true"
                  onClick={() => directToMeetupGithub()}/>
                <i
                  className="fa fa-globe fa-1x"
                  aria-hidden="true"
                  onClick={() => directToMeetup()}/>
              </div>
            </div>
            <p className="project-blurb">
              Meetups is a full stack single-page web application. It is a social platform inspired by www.meetup.com. Allow users create account, create groups and events to socialize with people with similar interest. The client will automatically update the user's location to find events nearby.
            </p>
            <ul className="project-assets">
              <li>Ruby</li>
              <li>Rails</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>React</li>
              <li>Redux</li>
              <li>PostgreSQL</li>
              <li>Webpack</li>
              <li>Git</li>
              <li>SASS</li>
              <li>HTML5</li>
              <li>Heroku</li>
            </ul>
          </div>
          <div className="overview"></div>
        </div>
        <div className="frozen-milk">
          <div className="description">
            <div className="project-name">
              <h1>Frozen Milk</h1>
              <div className="projects-links">
                <i
                  className="fa fa-github fa-1x"
                  aria-hidden="true"
                  onClick={() => directToFrozenGitHub()}/>
                <i
                  className="fa fa-globe fa-1x"
                  aria-hidden="true"
                  onClick={() => directToFrozen()}/>
              </div>
            </div>
            <p className="project-blurb">
              Frozen Milk is an interactive web browser game built using JavaScript, HTML5 Canvas, and CreateJS. Implemented HTML5 local storage access functionality with cookie fallback to keep track of the highest score.
            </p>
            <ul className="project-assets">
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>CreatJS</li>
              <li>CSS</li>
              <li>HTML5</li>
              <li>Git</li>
              <li>Webpack</li>
            </ul>
          </div>
          <div className="overview"></div>
        </div>
        <div className="overtrack">
          <div className="description">
            <div className="project-name">
              <h1>Overtrack</h1>
              <div className="projects-links">
                <i
                  className="fa fa-github fa-1x"
                  aria-hidden="true"
                  onClick={() => directToOvertrackGithub()}/>
                <i
                  className="fa fa-globe fa-1x"
                  aria-hidden="true"
                  onClick={() => directToOvertrack()}/>
              </div>
            </div>
            <p className="project-blurb">
              Overtrack is a single-page web applicatoin analyzing player statistics for League of Legends. It uses Riot's public API to collect data from tens of thousands of players and allow user's to view it. I strongly leveraged PostgreSQL json data type to seamlessly store and serve large amounts of data. Implemented Redis on Ruby on Rails to cut response times by more than 70%.
            </p>
            <ul className="project-assets">
              <li>Ruby</li>
              <li>Rails</li>
              <li>JavaScript</li>
              <li>Redis</li>
              <li>jQuery</li>
              <li>React</li>
              <li>Redux</li>
              <li>PostgreSQL</li>
              <li>Webpack</li>
              <li>Git</li>
              <li>CSS</li>
              <li>HTML5</li>
              <li>Heroku</li>
            </ul>
          </div>
          <div className="overview"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
