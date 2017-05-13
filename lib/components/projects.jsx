import React from 'react';
import SingleProject from '../modules/single-project';
import $ from 'jquery';

const Projects = ({scrollTo}) => {
  const scrollPosition = $(window).scrollTop();
  const directToMeetup = () => window.open("https://meet-ups.herokuapp.com/#/");
  const directToMeetupGithub = () => window.open("https://github.com/SJhang/Meetups");
  const directToFrozen = () => window.open("https://sjhang.github.io/Frozen-Milk/");
  const directToFrozenGitHub = () => window.open("https://github.com/SJhang/Frozen-Milk");
  const directToOvertrack = () => window.open("http://www.overtrack.win/");
  const directToOvertrackGithub = () => window.open("https://github.com/Sebastiansc/Overtrack");
  const directToYouTook = () => window.open("https://sjhang.github.io/YouTook/");
  const directToYouTookGitHub = () => window.open("https://github.com/SJhang/YouTook");

  const meetupOpts = {
    title: "MeetUps",
    directToGithub: () => directToMeetup(),
    directToLive: () => directToMeetupGithub(),
    blurb: "Meetups is a full stack single-page web application. It is a social platform inspired by www.meetup.com. Allow users create account, create groups and events to socialize with people with similar interest. The client will automatically update the user's location to find events nearby.",
    assets: [
      "Ruby", "Rails", "JavaScript", "jQuery", "ReactJS",
      "Redux", "PostgreSQL", "Webpack", "Git", "SASS", "HTML5", "Heroku"
    ],
    overview: "https://res.cloudinary.com/dsetpdsls/image/upload/v1487096033/meetups_kkubiw.png"
  };

  const overtrackOpts = {
    title: "Overtrack",
    directToGithub: () => directToOvertrackGithub(),
    directToLive: () => directToOvertrack(),
    blurb: "Overtrack is a single-page web applicatoin analyzing player statistics for League of Legends. It uses Riot's public API to collect data from tens of thousands of players and allow user's to view it. I strongly leveraged PostgreSQL json data type to seamlessly store and serve large amounts of data. Implemented Redis on Ruby on Rails to cut response times by more than 70%.",
    overview: "https://res.cloudinary.com/dsetpdsls/image/upload/v1487096031/overtrack_d1z0fb.png",
    assets: [
      "Ruby", "Rails", "JavaScript", "Redis", "jQuery",
      "ReactJS", "Redux", "PostgreSQL", "Git", "Webpack",
      "CSS", "HTML5", "Heroku"
    ]
  };

  const frozenMilkOpts = {
    title: "Frozen Milk",
    directToGithub: () => directToFrozenGitHub(),
    directToLive: () => directToFrozen(),
    blurb: "Frozen Milk is an interactive web browser game built using JavaScript, HTML5 Canvas, and CreateJS. Implemented HTML5 local storage access functionality with cookie fallback to keep track of the highest score.",
    overview: "https://res.cloudinary.com/dsetpdsls/image/upload/v1487096032/frozen-milk_v5e3te.png",
    assets: [
      "JavaScript", "CreateJS", "Canvas", "HTML5", "CSS",
      "Git", "Webpack", "Github", "jQuery"
    ]
  };

  const youTookOpts = {
    title: "YouTook",
    directToGithub: () => directToYouTookGitHub(),
    directToLive: () => directToYouTook(),
    blurb: "YouTook is a Single-page application for streaming your favorite music",
    overview: "",
    assets: [
      "ReactJS", "JavaScript", "YouTube API", "Webpack", "Bootstrap",
      "HTML5", "SASS", "Git", "jQuery", "localStorage"
    ]
  };

  return (
    <div className="row projects">
      <h1>Projects</h1>
      <div className="proj-wrapper">
        <SingleProject opts={meetupOpts} />
        <SingleProject opts={overtrackOpts} />
        <SingleProject opts={frozenMilkOpts} />
        <SingleProject opts={youTookOpts}/>
      </div>
    </div>
  );
};

export default Projects;
