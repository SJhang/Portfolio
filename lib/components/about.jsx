import React from 'react';

const About = (props) => {
  return (
    <div className="about">
      <div className="about-title">
        ABOUT ME
      </div>
      <div className="about-content">
        <img
          className="about-pic"
          src="https://res.cloudinary.com/dsetpdsls/image/upload/c_fit,w_280/v1486959067/sonik_xtcmh1.png"></img>
        <span className="blurb">
          <h2 className="sonik">Sonik Jhang</h2>
          <p>
            I am a full stack web developer. Passionate about building beautiful and efficient websites.
          </p>
          <p>
            After graduating from UT Austin, I have studied my own and attended full time courses to pursue my desire for learning programming languages and new technologies.
          </p>
          <p>
            I am currently looking for a Software Developer position where I can apply my programming skills to solve any challenges that can be thrown at me.
          </p>
          <p>
            Besides from coding, I love trying out new food and different beers around the world. I enjoy playing golf, basketball, snowboarding, and lifting. Also love traveling to new places to learn and experience cultures out there.
          </p>
        </span>
      </div>
    </div>
  );
};

export default About;
