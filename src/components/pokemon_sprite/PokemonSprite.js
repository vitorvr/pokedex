import React, { Component } from 'react';

class PokemonSprite extends Component {
  render() {
    function mountSpriteUrl(id){
      const url = "images/pokemon_images/",
            ext = ".png";
      return url + id + ext;
    }
    return (
      <img src={mountSpriteUrl(this.props.pokemonId)} alt={this.props.pokemonName}/>
    );
  }
}

export default PokemonSprite;
