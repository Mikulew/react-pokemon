import React from 'react';
import PokemonType from './PokemonType';
import PropTypes from 'prop-types';

const Pokemon = ({ name, img, num, type }) => (
  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
    <div className="pokemon-container">
      <img className="pokemon-image" src={img} alt={name} />
      <div>
        <p className="pokemon-title">
          #{num} {name}
        </p>
        <PokemonType types={type} />
      </div>
    </div>
  </div>
);

Pokemon.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  num: PropTypes.string,
  type: PropTypes.array,
};

export default Pokemon;
