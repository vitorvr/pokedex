import React, { Component } from 'react';
import PokemonImage from '../pokemon_image/PokemonImage.jsx';

class PokemonDetailed extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {}
  }

  render() {
    return (
      <div>
        <div>
          <PokemonImage pokemon={this.props.pokemon} from="pokemon-details"/>
        </div>
        <div>
          {this.props.pokemon.name}
        </div>
      </div>
    );
  }
}

export default PokemonDetailed;
