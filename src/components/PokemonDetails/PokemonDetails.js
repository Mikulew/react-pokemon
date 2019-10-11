import React, { Component } from 'react';
import PokemonType from 'components/PokemonType/PokemonType';
import Loader from 'components/Loader/Loader';
import PokemonImage from 'components/PokemonImage/PokemonImage';
import { Link } from 'react-router-dom';
import { BASE_URL, POKEMON_DETAILS_IMAGE_WIDTH, POKEMON_DETAILS_IMAGE_HEIGHT } from 'constants/constants';

class PokemonDetails extends Component {
  state = {
    pokemon: {},
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`${BASE_URL}/${id}`)
      .then(res => res.json())
      .then(json => this.setState({ pokemon: json }));
  }

  render() {
    const {
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
    } = this.state.pokemon;

    return (
      <>
        {Object.entries(this.state.pokemon).length === 0 ? (
          <Loader />
        ) : (
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
                      height={POKEMON_DETAILS_IMAGE_HEIGHT}>
                    </PokemonImage>
                    <table className="table table-bordered mt-2">
                      <thead>
                        <tr>
                          <th scope="col">Height</th>
                          <th scope="col">Weight</th>
                          <th scope="col">Egg</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{height}</td>
                          <td>{weight}</td>
                          <td>{egg}</td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="table table-bordered mt-2">
                      <thead>
                        <tr>
                          <th scope="col">Spawn chance</th>
                          <th scope="col">Average spawns</th>
                          <th scope="col">Spawn time</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{spawn_chance}</td>
                          <td>{avg_spawns}</td>
                          <td>{spawn_time}</td>
                        </tr>
                      </tbody>
                    </table>
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
        )}
      </>
    );
  }
}

export default PokemonDetails;
