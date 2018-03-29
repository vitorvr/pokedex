import React, { Component } from 'react';

import './PokemonDetails.scss';

class PokemonDetails extends Component {

  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div className="PokemonDetails">
        <div className="PokemonDetails-overlay" />
        <div className="PokemonDetails-content">
          <div className="PokemonDetails-close"/>
        </div>
      </div>
    );
  }
}

export default PokemonDetails;
