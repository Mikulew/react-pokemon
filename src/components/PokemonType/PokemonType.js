import React from 'react';
import PropTypes from 'prop-types';

const PokemonType = ({ types }) => (
  <div className="pokemon-types">
    {types.map(type => (
      <span className={`pokemon-type pokemon-type-${type.toLowerCase()}`} key={type}>
        {type}
      </span>
    ))}
  </div>
);

PokemonType.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PokemonType;
