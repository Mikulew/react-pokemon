import React from 'react';
import PokemonType from 'components/PokemonType/PokemonType';
import PropTypes from 'prop-types';
import PokemonImage from 'components/PokemonImage/PokemonImage';
import { POKEMON_ITEM_IMAGE_WIDTH, POKEMON_ITEM_IMAGE_HEIGHT } from 'constants/constants';

const PokemonItem = props => {
  const { name, img, num, type, routeChange } = props;

  return (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <div className="pokemon-container" onClick={() => routeChange(props)}>
        <PokemonImage
          src={img}
          alt={name}
          width={POKEMON_ITEM_IMAGE_WIDTH}
          height={POKEMON_ITEM_IMAGE_HEIGHT}>
        </PokemonImage>
        <div>
          <p className="pokemon-title">
            #{num} {name}
          </p>
          <PokemonType types={type} />
        </div>
      </div>
    </div>
  );
};

PokemonItem.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  num: PropTypes.string,
  type: PropTypes.array,
};

export default PokemonItem;
