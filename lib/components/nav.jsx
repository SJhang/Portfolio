import React from 'react';
import { Link, withRouter } from 'react-router';
import $ from 'jquery';

const Navbar = ({scrollTo, router}) => {
  const directToIntro = () => {
    if (location.hash.split('/')[1] === "") {
      scrollTo('intro');
    } else {
      router.push('/');
    }
  };

  const directToProjects = () => {
    scrollTo('projects');
  };

  const directToAssets = () => {
    scrollTo('assets');
  };

  const directToAbout = () => {
    scrollTo('about');
  };

  const directToResume = () => {
    return (router.push('/resume'));
  };

  const directToContact = () => {
    scrollTo('contact');
  };

  return (
    <div
      className="navbar navbar-default navbar-fixed-top"
      id="global-nav">
      <div className="container-fluid">
        <div className="row nav-columns">
          <div className="col-sm-3 col-md-3 col-lg-3 nav-title">
            <Link onClick={() => directToIntro()}>
              &lt;<h2>Portfolio</h2>&gt;
            </Link>
          </div>
          <ul className="col-sm-9 col-md-9 col-lg-9 nav-menu">
            <li
              className="projects-li"
              onClick={() => directToProjects()}>
              &lt;<h4>Projects</h4>&#8260;&gt;
            </li>
            <li
              className="assets-li"
              onClick={() => directToAssets()}>
              &lt;<h4>Assets</h4>&#8260;&gt;
            </li>
            <li
              className="about-li"
              onClick={() => directToAbout()}>
              &lt;<h4>About</h4>&#8260;&gt;
            </li>
            <li
              className="contact-li"
              onClick={() => directToContact()}>
              &lt;<h4>Contact</h4>&#8260;&gt;
            </li>
            <li
              className="resume-li"
              onClick={() => directToResume()}>
              &lt;<h4>Resume</h4>&#8260;&gt;
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
