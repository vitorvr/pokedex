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

  handleOpenPokemonsDetails(url){
    console.log(url);
  }

  render() {

    function getPokemonId(url){
      return url.split("/pokemon/")[1].split("/")[0];
    }

    const pokemonList = this.state.pokemons.map(pokemon => {
      pokemon.id = getPokemonId(pokemon.url);
      return (
        <li key={pokemon.url} className="Pokedex-list-item">
          <PokemonCard openPokemonDetails={this.handleOpenPokemonsDetails.bind(this)} pokemon={pokemon}/>
        </li>
      );
    });

    return (
      <div className="container Pokedex">
        <ul className="Pokedex-list">
          {pokemonList}
        </ul>
      </div>
    );
  }
}

export default Pokedex;
