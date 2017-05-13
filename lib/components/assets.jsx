import React from 'react';
import $ from 'jquery';

const Assets = ({scrollTo}) => {
  const assets = [
    ["JavaScript", "https://res.cloudinary.com/dsetpdsls/image/upload/c_fit,w_90/v1486794746/images_b4dnht.png"],
    ["Ruby", "https://res.cloudinary.com/dsetpdsls/image/upload/c_scale,w_90/v1486776047/ruby.svg_r4jxy5.png"],
    ["Ruby on Rails", "https://res.cloudinary.com/dsetpdsls/image/upload/c_fit,w_90/v1486776046/Ruby_On_Rails_Logo.svg_knotbd.png"],
    ["RSpec", "https://res.cloudinary.com/dsetpdsls/image/upload/c_scale,w_60/v1486776058/22388_ppifas.png"],
    ["Python", "http://res.cloudinary.com/dsetpdsls/image/upload/c_fit,w_90/v1486776047/Python-logo-notext.svg_aot7ik.png"],
    ["GitHub", "https://res.cloudinary.com/dsetpdsls/image/upload/c_fit,w_90/v1486776045/Octicons-mark-github.svg_tqzahw.png"],
    ["Git", "https://res.cloudinary.com/dsetpdsls/image/upload/c_fit,h_90,x_0/v1486776045/Git-logo.svg_ckaupj.png"],
    ["ReactJS", "https://res.cloudinary.com/dsetpdsls/image/upload/c_fit,h_90,w_90/v1486776046/react_ejwt7l.png"],
    ["HTML5", "https://res.cloudinary.com/dsetpdsls/image/upload/c_fit,h_127,w_90/v1486776044/HTML5_logo_and_wordmark_k1h5ys.png"],
    ["CSS3", "https://res.cloudinary.com/dsetpdsls/image/upload/c_fit,w_90/v1486794746/css3_gres05.png"],
    ["PostgreSQL", "https://res.cloudinary.com/dsetpdsls/image/upload/c_fit,w_90/v1486776045/Postgresql_elephant_hsvdtj.png"],
    ["MySQL", "https://res.cloudinary.com/dsetpdsls/image/upload/c_fit,h_90/v1486776045/logo-mysql-170x115_iij2np.png"],
    ["Jasmine", "https://res.cloudinary.com/dsetpdsls/image/upload/c_fit,w_90/v1486776045/Logo_jasmine.svg_mjufdj.png"],
    ["Webpack", "https://res.cloudinary.com/dsetpdsls/image/upload/c_fit,w_90/v1486776048/webpack_slxocg.png"],
    ["NodeJS", "http://res.cloudinary.com/dsetpdsls/image/upload/c_fit,h_120/v1486794747/Node.js_logo.svg_y0pdoa.png"],
    ["Heroku", "https://res.cloudinary.com/dsetpdsls/image/upload/c_fit,w_90/v1486794746/images_1_ubkskz.png"]
  ]

  const renderAssets = (asset) => {
    return asset.map((item, idx) => {
      let name = item[0];
      let src = item[1];
      return (
        <li key={idx}>
          <img className="asset" src={src}></img>
        </li>
      )
    })
  }
  return (
    <div className="assets">
      <div className="assets-title">
        ASSETS
      </div>
      <div className="all-assets">
        {renderAssets(assets)}
      </div>
    </div>
  );
};

export default Assets;
