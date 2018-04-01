import React, { Component } from 'react';

import './PokemonImage.scss';

class PokemonImage extends Component {

  constructor(props, context) {
    super(props, context);
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
