import React, { Component } from 'react';
import { SLIDE_TIME_DURATION } from 'constants/constants';
import ImagesData from 'assets/js/ImagesData';
import ImageSlide from './ImageSlide';

class Carousel extends Component {
  state = {
    currentImageIndex: 0,
  };

  componentDidMount() {
    setInterval(() => this.nextSlide(), SLIDE_TIME_DURATION);
  }

  nextSlide() {
    const lastIndex = ImagesData.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index,
    });
  }

  render() {
    const { currentImageIndex } = this.state;

    return (
      <div className="carousel">
        <ImageSlide data={ImagesData[currentImageIndex]} />
      </div>
    );
  }
}

export default Carousel;
