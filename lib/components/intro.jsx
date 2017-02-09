import React from 'react';

const Intro = (props) => {
  const openPdf = () => {

  };

  const openAngelList = () => {
    return () => window.open('https://www.angel.co/sonik-jhang');
  };

  const openLinkedin = () => {
    return () => window.open('https://www.linkedin.com/in/sonik-jhang');
  };

  const openGithub = () => {
    return () => window.open("https://github.com/SJhang");
  };

  const openEmail = () => {
    return () => window.open("mailto:sonik.jhang@utexas.edu");
  };

  return (
    <div className="splash">
      <div className="text">
        <h1 className="name">Sonik Jhang</h1>
        <h2>Software Developer</h2>
        <h3>Living in San Francisco</h3>
      </div>
      <div className="links">
        <li className="fa-stack fa-lg" onClick={openPdf()}>
          <i className="fa fa-circle-thin fa-stack-2x" aria-hidden="true"/>
          <i className="fa fa-file-pdf-o fa-stack-1x" aria-hidden="true"></i>
        </li>
        <li className="fa-stack fa-lg" onClick={openAngelList()}>
          <i className="fa fa-circle-thin fa-stack-2x" aria-hidden="true"/>
          <i className="fa fa-angellist fa-stack-1x" aria-hidden="true"></i>
        </li>
        <li className="fa-stack fa-lg" onClick={openLinkedin()}>
          <i className="fa fa-circle-thin fa-stack-2x" aria-hidden="true"/>
          <i className="fa fa-linkedin-square fa-stack-1x" aria-hidden="true"></i>
        </li>
        <li className="fa-stack fa-lg" onClick={openGithub()}>
          <i className="fa fa-circle-thin fa-stack-2x" aria-hidden="true"/>
          <i className="fa fa-github fa-stack-1x" aria-hidden="true"/>
        </li>
        <li className="fa-stack fa-lg" onClick={openEmail()}>
          <i className="fa fa-circle-thin fa-stack-2x" aria-hidden="true"/>
          <i className="fa fa-envelope-o fa-stack-1x" aria-hidden="true"></i>
        </li>
      </div>
    </div>
  );
};

export default Intro;
