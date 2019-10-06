import React, { Component } from 'react';

class PokemonImage extends Component {
  state = { isLoaded: false };

  handleImageLoaded = () => {
    this.setState({ isLoaded: true });
  };

  render() {
    const { alt, height, src, width } = this.props;
    const { isLoaded } = this.state;

    return (
        <img alt={alt} height={height} src={src} width={width} className={isLoaded ? "pokemon-image" : "pokemon-image-placeholder"} onLoad={this.handleImageLoaded} />
    );
  }
}

export default PokemonImage;
