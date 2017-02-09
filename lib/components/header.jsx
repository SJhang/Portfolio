import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

const Header = ({scrollTo}) => {
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
    <div className="global-header group">
      <div className="header-content group">
        <div className="title">
          <div><Link>&lt;<h4>Portfolio</h4>&gt;</Link></div>
        </div>
        <div className="menu">
          <li><Link>&lt;<h4>Projects</h4>&#8260;&gt;</Link></li>
          <li><Link>&lt;<h4>Assets</h4>&#8260;&gt;</Link></li>
          <li><Link>&lt;<h4>About</h4>&#8260;&gt;</Link></li>
          <li><Link>&lt;<h4>Contact</h4>&#8260;&gt;</Link></li>
        </div>
        <span className="fa-stack fa-lg">
          <i className="fa fa-square fa-stack-2x"></i>
          <i className="fa fa-terminal fa-stack-1x fa-inverse"></i>
        </span>
      </div>
    </div>
  );
};

export default Header;
