import React from 'react';

const PokemonType = ({ types }) => (
  <div className="pokemon-types">
    {types.map(type => (
      <span className={`pokemon-type pokemon-type-${type.toLowerCase()}`} key={type}>
        {type}
      </span>
    ))}
  </div>
);

export default PokemonType;
