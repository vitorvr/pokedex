import React, { Component } from 'react';

import './PokemonImage.scss';
import'../../../images/pokemons/1.png'

class PokemonImage extends Component {

  constructor() {
    super();
    this.state = {}
  }

  render() {

    const src = require(`../../../images/pokemons/${this.props.pokemon.id}.png`);

    return (
      <img src={src} alt={this.props.pokemon.name}/>
    );

  }
}

export default PokemonImage;
