import React, { Component } from 'react';

import './PokemonDetails.scss';

class PokemonDetails extends Component {

  constructor() {
    super();
    this.state = {}
  }

  render() {
    console.log(this.props.pokemonUrl);
    console.log(this.props.showPokemonDetails);
    return (
      <div className="PokemonDetails">
      EITA
      </div>
    );
  }
}

export default PokemonDetails;
