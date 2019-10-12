import React, { Component } from 'react';
import PokemonType from 'components/PokemonType/PokemonType';
import Loader from 'components/Loader/Loader';
import PokemonImage from 'components/PokemonImage/PokemonImage';
import Page404 from 'components/Page404/Page404';
import { Link } from 'react-router-dom';
import {
  BASE_URL,
  POKEMON_DETAILS_IMAGE_WIDTH,
  POKEMON_DETAILS_IMAGE_HEIGHT,
} from 'constants/constants';
import PropTypes from 'prop-types';
import PokemonDetailsTable from './PokemonDetailsTable';

class PokemonDetails extends Component {
  state = {
    pokemon: {},
    error: false,
  };

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon = async () => {
    try {
      const {
        match: {
          params: { id },
        },
      } = this.props;
      const response = await fetch(`${BASE_URL}/${id}`);
      const data = await response.json();
      if (response.status === 404 || response.status === 500) {
        throw response;
      }
      this.setState({ pokemon: data });
    } catch (e) {
      this.setState({ error: true });
    }
  };

  render() {
    const {
      pokemon,
      pokemon: {
        num,
        img,
        name,
        type,
        weaknesses,
        weight,
        height,
        egg,
        avg_spawns,
        spawn_chance,
        spawn_time,
      },
      error,
    } = this.state;
    const hasPokemon = Object.entries(pokemon).length === 0;
    const PokemonData1 = [
      {
        name: 'Height',
        value: height,
      },
      {
        name: 'Weight',
        value: weight,
      },
      {
        name: 'Egg',
        value: egg,
      },
    ];
    const PokemonData2 = [
      {
        name: 'Spawn chance',
        value: spawn_chance,
      },
      {
        name: 'Average spawns',
        value: avg_spawns,
      },
      {
        name: 'Spawn time',
        value: spawn_time,
      },
    ];

    if (error) {
      return <Page404 />;
    }
    if (hasPokemon) {
      return <Loader />;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card text-center mt-5">
              <div className="card-header">Pokemon #{num}</div>
              <div className="card-body">
                <h3 className="card-title font-weight-bold">{name}</h3>
                <PokemonImage
                  src={img}
                  alt={name}
                  width={POKEMON_DETAILS_IMAGE_WIDTH}
                  height={POKEMON_DETAILS_IMAGE_HEIGHT}
                />
                <PokemonDetailsTable data={PokemonData1} />
                <PokemonDetailsTable data={PokemonData2} />
                <p className="pokemon-paragraph">Types</p>
                <PokemonType types={type} />
                <p className="pokemon-paragraph">Weaknesses</p>
                <PokemonType types={weaknesses} />
              </div>
              <div className="card-footer text-right">
                <Link className="btn btn-secondary" to="/">
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PokemonDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PokemonDetails;
