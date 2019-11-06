import React from 'react';

// each cat image url component for list

const altImage = 'https://memegenerator.net/img/instances/59491789/ahh.jpg';

const CatImageUrl = props => (
  <div className="cats">
    <img className="cat-pic"> src={props.item.url} alt=`${altImage}` /></img>
  </div>
);

export default CatImageUrl;
