import React, { Component } from 'react';

class PokemonImage extends Component {

  constructor() {
    super();
    this.state = {}
  }
  
  render() {
    function mountSpriteUrl(id){
      const url = "images/pokemons/",
            ext = ".png";
      return url + id + ext;
    }
    return (
      <img src={mountSpriteUrl(this.props.pokemon.id)} alt={this.props.pokemon.name}/>
    );
  }
}

export default PokemonImage;
