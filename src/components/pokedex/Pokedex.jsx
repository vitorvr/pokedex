import React, { Component } from 'react';
import './Pokedex.scss';
import PokemonCard from '../pokemon_card/PokemonCard.jsx';

class Pokedex extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: []
    }
  }

  componentWillMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=802')
      .then(response => response.json())
      .then(data => this.setState({pokemons: data.results}));
  }

  render() {

    function getPokemonId(url){
      return url.split("/pokemon/")[1].split("/")[0];
    }

    const pokemonListItens = this.state.pokemons.map(pokemon => {

      let pokemonCurrent = {
        name: pokemon.name,
        url: pokemon.url,
        id: getPokemonId(pokemon.url)
      };

      return (
        <li key={pokemon.url} className="Pokedex-list-item">
          <PokemonCard pokemon={pokemonCurrent}/>
        </li>
      );

    });

    return (
      <div className="container Pokedex">
        <ul className="Pokedex-list">
          {pokemonListItens}
        </ul>
      </div>
    );
  }
}

export default Pokedex;
