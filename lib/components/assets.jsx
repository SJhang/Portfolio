import React from 'react';
import $ from 'jquery';

const Assets = ({scrollTo}) => {
  const showName = (name) => {
    let mouseX = 0, mouseY = 0, limitX = 15, limitY = 15;

    //cache the selector
    let follower = null;
    let xp = 0, yp = 0;

    $(window).mousemove(e => {
      let $elem = $(document.elementFromPoint(e.pageX, e.pageY));

      if ($elem.attr("class") === `${name}`) {
        let offset = $elem.offset();

        mouseX = Math.min(e.pageX - offset.left, $elem.width() - limitX);
        mouseY = Math.min(e.pageY - offset.top, $elem.height() - limitY);

        if (mouseX < 0) mouseX = 0;
        if (mouseY < 0) mouseY = 0;

        xp += (mouseX - xp) / 12;
        yp += (mouseY - yp) / 12;

        let loop = setInterval(() => {
          $elem.find('.follower').css({left: xp, top: yp});
        }, 30);
      }
    });

  };

  return (
    <div className="assets">
      <div className="title">&lt;<h4>assets</h4>&gt;</div>
      <div className="top">
        <div className="ruby" onMouseOver={() => showName("ruby")}>
          <h4 className="follower">Ruby</h4>
        </div>
        <div className="rails">
          <h4 className="follower">Ruby on Rails</h4>
        </div>
        <div className="rspec">
          <h4 className="follower">Rspec</h4>
        </div>
        <div className="python">
          <h4 className="follower">Python</h4>
        </div>
        <div className="github">
          <h4 className="follower">GitHub</h4>
        </div>
        <div className="git">
          <h4 className="follower">Git</h4>
        </div>
      </div>
      <div className="mid">
        <div className="react">
          <h4 className="follower">React</h4>
        </div>
        <div className="js">
          <h4 className="follower">JavaScript</h4>
        </div>
        <div className="css">
          <h4 className="follower">CSS</h4>
        </div>
        <div className="html">
          <h4 className="follower">HTML</h4>
        </div>
        <div className="psql">
          <h4 className="follower">PostgreSQL</h4>
        </div>
        <div className="mysql">
          <h4 className="follower">MySQL</h4>
        </div>
        <div className="jasmine">
          <h4 className="follower">Jasmine</h4>
        </div>
        <div className="webpack">
          <h4 className="follower">Webpack</h4>
        </div>
      </div>
      <div className="bot">
        <div className="node">
          <h4 className="follower">NodeJS</h4>
        </div>
        <div className="heroku">
          <h4 className="follower">Heroku</h4>
        </div>
      </div>
      <div className="title">
        &lt;<h4>assets</h4>&#8260;&gt;
      </div>
    </div>
  );
};

export default Assets;
