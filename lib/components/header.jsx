import React from 'react';
import { Link, withRouter } from 'react-router';
import $ from 'jquery';

const Header = ({scrollTo, router}) => {
  // const directToSplash = () => {
  //   $(window).scrollTo('splash');
  // };
  //
  // const directToProjects = () => {
  //   $(window).scrollTo('projects');
  // };
  //
  // const directToAssets = () => {
  //   $(window).scrollTo('assets');
  // };
  //
  // const directToAbout = () => {
  //   $(window).scrollTo('about');
  // };

  return (
    <div className="global-header">
      <div className="header-content">
        <div className="title">
          <div><Link onClick={() => router.push('/')}>&lt;<h4>Portfolio</h4>&gt;</Link></div>
        </div>
        <div className="menu">
          <li><Link>&lt;<h4>Projects</h4>&#8260;&gt;</Link></li>
          <li><Link>&lt;<h4>Assets</h4>&#8260;&gt;</Link></li>
          <li><Link>&lt;<h4>About</h4>&#8260;&gt;</Link></li>
          <li><Link>&lt;<h4>Contact</h4>&#8260;&gt;</Link></li>
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
