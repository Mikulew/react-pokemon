import React, { Component } from 'react';
import ImageSlide from './ImageSlide';
import ImagesData from 'assets/js/ImagesData';
import { SLIDE_TIME_DURATION } from 'constants/constants';

class Carousel extends Component {
  state = {
    currentImageIndex: 0,
  };

  nextSlide() {
    const lastIndex = ImagesData.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index,
    });
  }

  componentDidMount() {
    setInterval(() => this.nextSlide(), SLIDE_TIME_DURATION);
  }

  render() {
    return (
      <div className="carousel">
        <ImageSlide data={ImagesData[this.state.currentImageIndex]} />
      </div>
    );
  }
}

export default Carousel;
