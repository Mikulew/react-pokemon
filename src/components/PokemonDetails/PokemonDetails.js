import React, { Component } from 'react';
import PokemonType from 'components/PokemonType/PokemonType';
import { Link } from 'react-router-dom';

class PokemonDetails extends Component {
  state = {
    pokemon: {},
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`http://localhost:4000/pokemon/${id}`)
      .then(res => res.json())
      .then(json => this.setState({ pokemon: json }));
  }

  render() {
    const { num, img, name, type, weaknesses, weight, height } = this.state.pokemon;

    return (
      <div className="container">
        <div className="row">
          {Object.entries(this.state.pokemon).length === 0 ? (
            'Loading'
          ) : (
            <div className="col-12">
              <div className="card text-center mt-5">
                <div className="card-header">Pokemon #{num}</div>
                <div className="card-body">
                  <h3 className="card-title font-weight-bold">{name}</h3>
                  <img className="pokemon-image" src={img} alt={name} />
                  <div className="pokemon-text-container">
                    <div className="pokemon-text">
                      <p className="pokemon-paragraph">Height</p>
                      <p className="font-weight-bold">{height}</p>
                    </div>
                    <div className="pokemon-text">
                      <p className="pokemon-paragraph">Weight</p>
                      <p className="font-weight-bold">{weight}</p>
                    </div>
                  </div>
                  <p className="pokemon-paragraph">Types</p>
                  <PokemonType types={type} />
                  <p className="pokemon-paragraph">Weaknesses</p>
                  <PokemonType types={weaknesses} />
                </div>
                <div className="card-footer">
                  <Link className="btn btn-secondary" to="/">
                    Back
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default PokemonDetails;
