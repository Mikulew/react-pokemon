import React from 'react';

const ImageSlide = ({ data }) => {
  const styles = {
    backgroundImage: `url(${data.url})`,
    backgroundColor: `${data.color}`,
  };

  return <div className="image-slide" style={styles}></div>;
};

export default ImageSlide;
