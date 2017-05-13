import React from 'react';

const SingleProjects = (props) => {
  const title = props.opts.title;
  const directToGithub = props.opts.directToGithub;
  const directToLive = props.opts.directToLive;
  const blurb = props.opts.blurb;
  const assets = props.opts.assets;
  const overview = props.opts.overview;

  const renderAssets = (assets) => {
    return assets.map((item, idx) => {
      return (<li key={idx}>{item}</li>);
    })
  };

  return (
    <div className="proj">
      <div className="pd">
        <div className="pd-name">
          <h2>{title}</h2>
          <div className="pd-links">
            <i
              className="fa fa-github fa-3x"
              aria-hidden="true"
              onClick={() => directToGithub()}/>
            <i
              className="fa fa-globe fa-3x"
              aria-hidden="true"
              onClick={() => directToLive()}/>
          </div>
        </div>
        <p className="pd-blurb">
          {blurb}
        </p>
        <ul className="pd-assets">
          {renderAssets(assets)}
        </ul>
      </div>
      <div className="po">
        <img src={overview}></img>
      </div>
    </div>
  )
}

export default SingleProjects;
