import React, { Component } from 'react';
import PokemonImage from '../pokemon_image/PokemonImage.jsx';

import './PokemonCard.scss';

class PokemonCard extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {}
  }

  openPokemonDetails(url) {
    this.props.openPokemonDetails(url);
  }

  render() {
    return (
      <div className="PokemonCard" onClick={this.openPokemonDetails.bind(this, this.props.pokemon.url)}>
        <div className="PokemonCard-sprite">
          <PokemonImage pokemon={this.props.pokemon}/>
        </div>
        <div className="PokemonCard-footer">
          <span>{this.props.pokemon.id}.&nbsp;{this.props.pokemon.name.replace(/\b\w/g, l => l.toUpperCase())}</span>
        </div>
      </div>
    );
  }
}

export default PokemonCard;
