import React from 'react';
import { Link, withRouter } from 'react-router';
import $ from 'jquery';

const Header = ({scrollTo, router}) => {
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
    <div className="global-header">
      <div className="header-content">
        <div className="title">
          <div>
            <Link onClick={() => directToIntro()}>
              &lt;<h4>Portfolio</h4>&gt;
            </Link>
          </div>
        </div>
        <div className="menu">
          <li>
            <Link onClick={() => directToProjects()}>
              &lt;<h4>Projects</h4>&#8260;&gt;
            </Link>
          </li>
          <li>
            <Link onClick={() => directToAssets()}>
              &lt;<h4>Assets</h4>&#8260;&gt;
            </Link>
          </li>
          <li>
            <Link onClick={() => directToAbout()}>
              &lt;<h4>About</h4>&#8260;&gt;
            </Link>
          </li>
          <li>
            <Link onClick={() => directToContact()}>
              &lt;<h4>Contact</h4>&#8260;&gt;
            </Link>
          </li>
          <li>
            <Link onClick={() => directToResume()}>
              &lt;<h4>Resume</h4>&#8260;&gt;
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};
// <span className="fa-stack fa-lg">
//   <i className="fa fa-square fa-stack-2x"></i>
//   <i className="fa fa-terminal fa-stack-1x fa-inverse"></i>
// </span>

export default withRouter(Header);
