import React, { Component } from 'react';
import './Pokedex.scss';
import PokemonCard from '../pokemon_card/PokemonCard';

class Pokedex extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: []
    }
  }

  componentWillMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=2')
      .then(response => response.json())
      .then(data => this.setState({pokemons: data.results}));
  }

  render() {
    function getPokemonId(url){
      return url.split("/pokemon/")[1].split("/")[0];
    }

    const pokemonsJson = this.state.pokemons.map(pokemon => (
      <li key={pokemon.url} className="Pokedex-list-item">
        <PokemonCard pokemonName={pokemon.name} pokemonId={getPokemonId(pokemon.url)}/>
      </li>
    ));

    return (
      <div className="container Pokedex">
        <ul className="Pokedex-list">
          {pokemonsJson}
        </ul>
      </div>
    );
  }
}

export default Pokedex;
