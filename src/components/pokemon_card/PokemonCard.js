import React, { Component } from 'react';
import PokemonSprite from '../pokemon_sprite/PokemonSprite';

import './PokemonCard.scss';

class PokemonCard extends Component {

  render() {
    return (
      <div className="PokemonCard">
        <div className="PokemonCard-sprite">
          <PokemonSprite pokemonId={this.props.pokemonId} pokemonName={this.props.pokemonName}/>
        </div>
        <div className="PokemonCard-footer">
          <span>{this.props.pokemonId}.{this.props.pokemonName}</span>
        </div>
      </div>
    );
  }
}

export default PokemonCard;
