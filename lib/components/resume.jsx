import React from 'react';

const Resume = (props) => {
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
    <div className="resume">
      <header className="resume-header">
        <div className="photo">
          <img className="headshot"></img>
        </div>
        <div className="info">
          <h1>SONIK JHANG</h1>
          <h2>SOFTWARE ENGINEER</h2>
          <p>Front-end developer passionate about using cutting edge technologies like React and node.js to build fluid and responsive web applications. Fluent in Ruby, JavaScript, Python and Korean. Get in touch to work together on your next project. </p>
        </div>
      </header>
      <div className="resume-content">
        <div className="left-content">
          <div className="resume-projects">
            <h2>PROJECTS</h2>
            <div className="projects-detail">
              <div className="resume-meetups">
                <div className="lines">
                  <div></div>
                  <div className="box-line"></div>
                  <div className="line-circle"></div>
                  <div></div>
                </div>
                <div className="project-title">
                  <div className="name">MeetUps</div>
                  <ul className="project-assets">
                    <li>Rails</li>
                    <li>React/Redux</li>
                    <li>PostgreSQL</li>
                  </ul>
                  <div className="project-links">
                    <i
                      className="fa fa-github fa-3x"
                      aria-hidden="true"
                      onClick={() => directToMeetupGithub()}><h4>&nbsp;Github</h4></i>
                    <i
                      className="fa fa-globe fa-3x"
                      aria-hidden="true"
                      onClick={() => directToMeetup()}><h4>&nbsp;Live</h4></i>
                  </div>
                </div>
                <div className="project-details">
                  <div className="resume-blurb">
                    Single-page application for people with similar interests to create groups and RSVP to events inspired by Meetup.com
                  </div>
                  <div className="features">
                    <span>
                      Utilized the unidirectional data flow of Redux architecture for reliable DOM rendering</span>
                    <span>
                      Leveraged GoogleMap’s open source API to implement typo­-proof auto completion search. User input is cross checked with possible results and most applicable location is chosen</span>
                    <span>
                      Implemented custom authentication on the database level using SecureRandom Hashing and BCrypt and on the front-end by bootstrapping current user</span>
                    <span>
                      Created and instantaneous search by combining asynchronous AJAX requests with Redux state slice update</span>
                  </div>
                </div>
              </div>
              <div className="resume-frozen-milk">
                <div className="lines-two">
                  <div></div>
                  <div></div>
                  <div className="line-circle-two"></div>
                  <div></div>
                </div>
                <div className="project-title">
                  <div className="name">Frozen Milk</div>
                  <ul className="project-assets">
                    <li>JavaScript</li>
                    <li>HTML5 Canvas</li>
                    <li>CreateJS</li>
                  </ul>
                  <div className="project-links">
                    <i
                      className="fa fa-github fa-3x"
                      aria-hidden="true"
                      onClick={() => directToFrozenGitHub()}><h4>&nbsp;Github</h4></i>
                    <i
                      className="fa fa-globe fa-3x"
                      aria-hidden="true"
                      onClick={() => directToFrozen()}><h4>&nbsp;Live</h4></i>
                  </div>
                </div>
                <div className="project-details">
                  <div className="resume-blurb">
                    JavaScript based browser game built from scratch with CreateJS and HTML5 Canvas
                  </div>
                  <div className="features">
                    <span>
                      Rendered animations reliably with a combination of Spritesheet on an HTML5 Canvas</span>
                    <span>
                      Implemented HTML5 local storage access functionality with cookie fallback to keep track of the highest score</span>
                  </div>
                </div>
              </div>
              <div className="resume-overtrack">
                <div className="lines-three">
                  <div></div>
                  <div></div>
                  <div className="line-circle-three"></div>
                  <div></div>
                </div>
                <div className="project-title">
                  <div className="name">Overtrack</div>
                  <ul className="project-assets">
                    <li>Rails</li>
                    <li>ReactRedux</li>
                    <li>PostgreSQL</li>
                  </ul>
                  <div className="project-links">
                    <i
                      className="fa fa-github fa-3x"
                      aria-hidden="true"
                      onClick={() => directToOvertrackGithub()}><h4>&nbsp;Github</h4></i>
                    <i
                      className="fa fa-globe fa-3x"
                      aria-hidden="true"
                      onClick={() => directToOvertrack()}><h4>&nbsp;Live</h4></i>
                  </div>
                </div>
                <div className="project-details">
                  <div className="resume-blurb">
                    Single-page web application using League of Legends API for player statistics
                  </div>
                  <div className="features">
                    <span>
                      Utilized public network API offered by Riot to access consistent and accurate data of &#60; 20 million users</span>
                    <span>
                      Created Rake Tasks to do Cron jobs which automatically fetch and update data to better user experience by assuring only most up-to-date stats are displayed and old data is erased from the server</span>
                    <span>
                      Maximized output by utilizing version control and practiced DRY coding</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-experience">
            <h2>EXPERIENCE</h2>
            <div className="experience-detail">
              <div className="china-pacific">
                <div className="lines-four">
                  <div></div>
                  <div className="box-line"></div>
                  <div className="line-circle-four"></div>
                  <div></div>
                </div>
                <div className="exp-title">
                  <div className="name">China Pacific</div>
                  <div className="exp-length">Sept 2014 - May 2016</div>
                </div>
                <div className="exp-details"></div>
              </div>
              <div className="LLC">
                <div className="lines-five">
                  <div></div>
                  <div className="box-line"></div>
                  <div className="line-circle-five"></div>
                  <div></div>
                </div>
                <div className="exp-title">
                  <div className="name">Wecon LLC</div>
                  <div className="exp-length">Mar 2009 - May 2011</div>
                </div>
                <div className="exp-details"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-content">
          <div className="skills">
            <h2>MY SKILLS</h2>
            <div className="skills-detail">
              <ul>
                <li>RUBY</li>
                <li>RAILS</li>
                <li>RSPEC</li>
                <li>CAPYBARA</li>
                <li>SQL</li>
                <li>REDIS</li>
                <li>HEROKU</li>
                <li>GIT</li>
                <li>GITHUB</li>
                <li>HTML 5</li>
                <li>PROCESSING 3</li>
                <li>WEBPACK</li>
                <li>JQUERY</li>
                <li>SASS</li>
              </ul>
              <ul>
                <li>JAVASCRIPT</li>
                <li>NODE.JS</li>
                <li>REACT/REDUX</li>
                <li>PYTHON</li>
                <li>CSS 3</li>
                <li>D3.JS</li>
                <li>MYSQL</li>
                <li>JASMINE</li>
                <li>CREATE.JS</li>
              </ul>
            </div>
          </div>
          <div className="education">
            <h2>EDUCATION</h2>
            <div className="education-divs">
              <div className="appAcademy">
                <h3>APP ACADEMY</h3>
                <p>1000-hour full-stack web development program with &#60; 3% acceptance rate</p>
                <p>Emphasis on pair programming, algorithm, and Test Driven Development (TDD)</p>
              </div>
              <div className="utAustin">
                <h3>University of Texas at Austin</h3>
                <p>B.A. Economics and Minor in Computer Science</p>
              </div>
            </div>
          </div>
          <div className="resume-contact">
            <h2>CONTACT ME</h2>
            <span>744 Overture Ct. San Jose, CA 95134</span>
            <span>806 w 24th St. Austin, TX 78705</span>
            <span>512 850 - 2709</span>
            <span>sonik.jhang@utexas.edu</span>
            <span>www.sonikjhang.com</span>
            <span>www.linkedin.com/in/sonikjhang</span>
            <span>www.github.com/SJhang</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

// <div className="resume-portfolio">
//   <div className="project-title">
//     <div className="name">Portfolio</div>
//     <ul className="project-assets">
//       <li>JavaScript</li>
//       <li>jQuery</li>
//       <li>HTML5&#47;CSS3</li>
//     </ul>
//     <div className="links"></div>
//   </div>
//   <div className="project-details">
//     <div className="resume-blurb">
//       The digital portfolio of Sonik Jhang
//     </div>
//     <div className="features">
//       <span></span>
//     </div>
//   </div>
// </div>
