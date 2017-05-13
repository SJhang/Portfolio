import React from 'react';

const About = (props) => {
  return (
    <div className="row about">
      <h1>ABOUT ME</h1>
      <div className="about-content">
        <img
          className="about-pic"
          src="https://res.cloudinary.com/dsetpdsls/image/upload/c_fit,w_280/v1486959067/sonik_xtcmh1.png"></img>
        <span className="blurb">
          <h2 className="sonik">Sonik Jhang</h2>
          <p>
            I am a full stack web developer who is passionate about building beautiful and efficient websites.
          </p>
          <p>
            After graduating from UT Austin, I studied on my own and attended full time courses to pursue my desire for learning programming languages and new technologies.
          </p>
          <p>
            I am currently looking for a Software Developer position where I can apply my programming skills to solve any challenge that is thrown at me.
          </p>
          <p>
            Besides coding, I love trying new food and different beers around the world. I enjoy playing golf, basketball, snowboarding, and lifting. I also enjoy traveling to new places and learning about different cultures.
          </p>
        </span>
      </div>
    </div>
  );
};

export default About;
