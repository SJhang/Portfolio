import React from 'react';
import ReactTooltip from 'react-tooltip'

const Links = (props) => {
  const openPdf = () => {
    return window.open("assets/resume.pdf");
  };

  const openAngelList = () => {
    return window.open('https://www.angel.co/sonik-jhang');
  };

  const openLinkedin = () => {
    return window.open('https://www.linkedin.com/in/sonik-jhang');
  };

  const openGithub = () => {
    return window.open("https://github.com/SJhang");
  };

  const openEmail = () => {
    location.href = "mailto:sonik.jhang@utexas.edu";
  };

  return (
    <ul className="links">
      <li data-tip='resume' data-for='links' className="fa-stack fa-lg" onClick={() => openPdf()}>
        <i className="fa fa-circle-thin fa-stack-2x" aria-hidden="true"/>
        <i className="fa fa-file-pdf-o fa-stack-1x" aria-hidden="true"></i>
      </li>
      <li data-tip='LinkedIn' data-for='links' className="fa-stack fa-lg" onClick={() => openLinkedin()}>
        <i className="fa fa-circle-thin fa-stack-2x" aria-hidden="true"/>
        <i className="fa fa-linkedin-square fa-stack-1x" aria-hidden="true"></i>
      </li>
      <li data-tip='Github' data-for='links' className="fa-stack fa-lg" onClick={() => openGithub()}>
        <i className="fa fa-circle-thin fa-stack-2x" aria-hidden="true"/>
        <i className="fa fa-github fa-stack-1x" aria-hidden="true"/>
      </li>
      <li data-tip='E-mail' data-for='links' className="fa-stack fa-lg" onClick={() => openEmail()}>
        <i className="fa fa-circle-thin fa-stack-2x" aria-hidden="true"/>
        <i className="fa fa-envelope-o fa-stack-1x" aria-hidden="true"></i>
      </li>
      <li data-tip='Angel List' data-for='links' className="fa-stack fa-lg" onClick={() => openAngelList()}>
        <i className="fa fa-circle-thin fa-stack-2x" aria-hidden="true"/>
        <i className="fa fa-angellist fa-stack-1x" aria-hidden="true"></i>
      </li>
      <ReactTooltip id="links" delayHide={500} effect="solid" place="bottom"/>
    </ul>
  );
};

export default Links;
