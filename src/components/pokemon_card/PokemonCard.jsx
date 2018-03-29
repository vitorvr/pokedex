import React, { Component } from 'react';
import PokemonImage from '../pokemon_image/PokemonImage.jsx';

import './PokemonCard.scss';

class PokemonCard extends Component {

  render() {
    return (
      <div className="PokemonCard">
        <div className="PokemonCard-sprite">
          <PokemonImage pokemon={this.props.pokemon}/>
        </div>
        <div className="PokemonCard-footer">
          <span>{this.props.pokemon.id}.{this.props.pokemon.name}</span>
        </div>
      </div>
    );
  }
}

export default PokemonCard;
