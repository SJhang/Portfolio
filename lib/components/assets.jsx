import React from 'react';

const Assets = ({scrollTo}) => {
  return (
    <div className="assets">
      <div className="title">&lt;<h4>Assets</h4>&gt;</div>
      <div className="top">
        <img className="ruby"></img>
        <img className="rails"></img>
        <img className="rspec"></img>
        <img className="python"></img>
        <img className="github"></img>
        <img className="git"></img>
      </div>
      <div className="mid">
        <img className="react"></img>
        <img className="js"></img>
        <img className="css"></img>
        <img className="html"></img>
        <img className="psql"></img>
        <img className="mysql"></img>
        <img className="jasmine"></img>
        <img className="webpack"></img>
      </div>
      <div className="bot">
        <img className="node"></img>
        <img className="heroku"></img>
      </div>
      <div className="title">
        &lt;<h4>Assets</h4>&#8260;&gt;
      </div>
    </div>
  );
};

export default Assets;
