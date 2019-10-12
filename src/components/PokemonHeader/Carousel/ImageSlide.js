import React from 'react';
import PropTypes from 'prop-types';

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

ImageSlide.propTypes = {
  data: PropTypes.shape({
    color: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageSlide;
