import React from 'react';
import $ from 'jquery';

const Projects = ({scrollTo}) => {
  const scrollPosition = $(window).scrollTop();
  const stickerIndicator = () => {
  };

  return (
    <div className="projects">
      <div className="stick-container"></div>
      <div className="meetups"></div>
      <div className="frozen-milk"></div>
      <div className="overtrack"></div>
    </div>
  );
};

export default Projects;

// <ul>
//   <li className="circle">
//     <i className="fa fa-circle-o" aria-hidden="true"/>
//   </li>
//   <li className="circle">
//     <i className="fa fa-circle-o" aria-hidden="true"/>
//   </li>
//   <li className="circle">
//     <i className="fa fa-circle-o" aria-hidden="true"/>
//   </li>
// </ul>
