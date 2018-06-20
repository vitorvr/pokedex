import React, { Component } from 'react';
import PokemonImage from '../pokemon_image/PokemonImage';

import './PokemonCard.scss';

class PokemonCard extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {}
  }

  openPokemonModal(pokemon) {
    this.props.openPokemonModal(pokemon);
  }

  render() {
    return (
      <div className="PokemonCard" onClick={this.openPokemonModal.bind(this, this.props.pokemon)}>
        <div className="PokemonCard-sprite">
          <PokemonImage pokemon={this.props.pokemon} from="pokemon-card"/>
        </div>
        <div className="PokemonCard-footer">
          <span>{this.props.pokemon.id}.&nbsp;{this.props.pokemon.name.replace(/\b\w/g, l => l.toUpperCase())}</span>
        </div>
      </div>
    );
  }
}

export default PokemonCard;
