import React from 'react';
import Links from './links';

const Intro = (props) => {
  return (
    <div className="splash">
      <div className="text">
        <h1 className="name">Sonik Jhang</h1>
        <h2>Software Developer</h2>
        <h3>Living in San Francisco</h3>
      </div>
      <Links />
    </div>
  );
};

export default Intro;
