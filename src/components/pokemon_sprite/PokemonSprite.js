import React, { Component } from 'react';

class PokemonSprite extends Component {
  render() {
    function mountSpriteUrl(id){
      const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
            ext = ".png";
      return url + id + ext;
    }
    return (
      <img src={mountSpriteUrl(this.props.pokemonId)} alt={this.props.pokemonName}/>
    );
  }
}

export default PokemonSprite;
