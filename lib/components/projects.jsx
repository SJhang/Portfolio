import React from 'react';
import SingleProject from '../modules/single-project';
import $ from 'jquery';

const Projects = ({scrollTo}) => {
  const scrollPosition = $(window).scrollTop();

  const directToGithub = (url) => window.open(url);
  const directToLive = (url) => window.open(url);

  const meetupGithub = "https://github.com/SJhang/Meetups";
  const meetup = "https://gearup-now.herokuapp.com/";
  const frozenGithub = "https://github.com/SJhang/Frozen-Milk";
  const frozen = "https://sjhang.github.io/Frozen-Milk/";
  const overtrackGithub = "https://github.com/Sebastiansc/Overtrack";
  const overtrack = "http://www.overtrack.win/";
  const youtookGithub = "https://github.com/SJhang/YouTook";
  const youtook = "https://sjhang.github.io/YouTook/";
  const portfolioGithub = "https://github.com/SJhang/Portfolio";
  const portfolio = "http://www.sonikjhang.com/#/";
  const hotspots = "https://www.hotspots.herokuapp.com";
  const hotspotsGithub = "https://github.com/deokpyo/hotspots";

  const meetupOpts = {
    title: "MeetUps",
    directToGithub: () => directToGithub(meetupGithub),
    directToLive: () => directToLive(meetup),
    blurb: "Meetups is a full stack single-page web application. It is a social platform inspired by www.meetup.com. Allow users create account, create groups and events to socialize with people with similar interest. The client will automatically update the user's location to find events nearby.",
    assets: [
      "Ruby", "Rails", "JavaScript", "jQuery", "ReactJS",
      "Redux", "PostgreSQL", "Webpack", "Git", "SASS", "HTML5", "Heroku"
    ],
    overview: "https://res.cloudinary.com/dsetpdsls/image/upload/v1487096033/meetups_kkubiw.png"
  };

  const overtrackOpts = {
    title: "Overtrack",
    directToGithub: () => directToGithub(overtrackGithub),
    directToLive: () => directToLive(overtrack),
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
    directToGithub: () => directToGitHub(frozenGithub),
    directToLive: () => directToLive(frozen),
    blurb: "Frozen Milk is an interactive web browser game built using JavaScript, HTML5 Canvas, and CreateJS. Implemented HTML5 local storage access functionality with cookie fallback to keep track of the highest score.",
    overview: "https://res.cloudinary.com/dsetpdsls/image/upload/v1487096032/frozen-milk_v5e3te.png",
    assets: [
      "JavaScript", "CreateJS", "Canvas", "HTML5", "CSS",
      "Git", "Webpack", "Github", "jQuery"
    ]
  };

  const youTookOpts = {
    title: "YouTook",
    directToGithub: () => directToGitHub(youtookGithub),
    directToLive: () => directToLive(youtook),
    blurb: "YouTook is a Single-page application for streaming your favorite music",
    overview: "",
    assets: [
      "ReactJS", "JavaScript", "YouTube API", "Webpack", "Bootstrap",
      "HTML5", "SASS", "Git", "jQuery", "localStorage"
    ]
  };

  const portfolioOpts = {
    title: "Portfolio",
    directToGithub: () => directToGithub(portfolioGithub),
    directToLive: () => directToLive(portfolio),
    blurb: "Digital portfolio of myself to show my recent and past projects",
    assets: [
      "ReactJS", "JavaScript", "Webpack", "HTML5", "SASS", "jQuery"
    ],
    overview: ""
  }

  const hotspotsOpts = {
    title: "HotSpots",
    directToGithub: () => directToGithub(hotspotsGithub),
    directToLive: () => directToLive(hotspots),
    blurb: "Solution for increase frequency of users for travel related products",
    assets: [
      "ReactJS", "Redux", "JavaScript", "Webpack", "HTML5", "SASS", "MongoDB", "ExpressJS",
      "NodeJS"
    ]
  }

  const chinaPacificOpts = {
    title: "China Pacific",
    directToGithub: () => directToGithub(chinaPacificGithub),
    directToLive: () => directToLive(chinaPacific),
    blurb: "Single-page web application for food restaurant. This is a demo version for a restaurant named China Pacific.",
    assets: [
      "ReactJS", "Redux", "JavaScript", "Webpack", "HTML5", "SASS", "Ruby on Rails", "Heroku"
    ]
  }
  return (
    <div className="row projects">
      <h1>Projects</h1>
      <div className="proj-wrapper">
        <SingleProject opts={meetupOpts} />
        <SingleProject opts={overtrackOpts} />
        <SingleProject opts={frozenMilkOpts} />
        <SingleProject opts={youTookOpts}/>
        <SingleProject opts={chinaPacificOpts} />
        <SingleProject opts={portfolioOpts}/>
        <SingleProject opts={hotspotsOpts}/>
      </div>
    </div>
  );
};

export default Projects;
