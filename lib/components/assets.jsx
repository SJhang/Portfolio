import React from 'react';
import $ from 'jquery';

const Assets = ({scrollTo}) => {
  // const showName = (name) => {
  //   let mouseX = 0, mouseY = 0, limitX = 15, limitY = 15;
  //
  //   //cache the selector
  //   let follower = null;
  //   let xp = 0, yp = 0;
  //
  //   $(window).mousemove(e => {
  //     let $elem = $(document.elementFromPoint(e.pageX, e.pageY));
  //
  //     if ($elem.attr("class") === `${name}`) {st
  //       let offset = $elem.offset();
  //
  //       mouseX = Math.min(e.pageX - offset.left, $elem.width() - limitX);
  //       mouseY = Math.min(e.pageY - offset.top, $elem.height() - limitY);
  //
  //       if (mouseX < 0) mouseX = 0;
  //       if (mouseY < 0) mouseY = 0;
  //
  //       xp += (mouseX - xp) / 12;
  //       yp += (mouseY - yp) / 12;
  //
  //       let loop = setInterval(() => {
  //         $elem.find('.follower').css({left: xp, top: yp});
  //       }, 30);
  //     }
  //   });
  //
  // };
  const showName = (e, div) => {
    let mouseX = 0, mouseY = 0;
    let limitX = 15, limitY = 15;
    let target = e.currentTarget;

    //cache the selector
    let follower, xp = 0, yp = 0;
    if (target.className === div) {
      debugger;
      mouseX = Math.min(e.pageX - target.offsetLeft, target.offsetWidth - limitX);
      mouseY = Math.min(e.pageY - target.offsetTop, target.offsetHeight - limitY);

      if (mouseX < 0) mouseX = 0;
      if (mouseY < 0) mouseY = 0;

      xp += (mouseX - xp) / 12;
      yp += (mouseY - yp) / 12;

      setInterval(() => {
        // target.children[0].style.display = "block";
        target.children[0].style.left = xp;
        target.children[0].style.top = yp;
      }, 30);
    } else {
      // target.children[0].style.display = "none";
    }
  };

  return (
    <div className="assets">
      <div className="assets-title">
        ASSETS
      </div>
      <div className="all-assets">
        <div className="top">
          <div className="ruby" onMouseOver={(e) => showName(e, "ruby")}>
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
      </div>
    </div>
  );
};

export default Assets;
