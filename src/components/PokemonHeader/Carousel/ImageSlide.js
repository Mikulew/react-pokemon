import React from 'react';

const ImageSlide = ({ data }) => {
  const styles = {
    backgroundColor: `${data.color}`,
  };

  return (
    <div className="image-slide-container" style={styles}>
      <img className="image-slide" src={data.url} alt={data.alt} />
    </div>
  );
};

export default ImageSlide;
