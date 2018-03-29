import React, { Component } from 'react';
import PokemonCard from '../pokemon_card/PokemonCard.jsx';
import PokemonDetails from '../pokemon_details/PokemonDetails.jsx';
import ReactDOM from 'react-dom';

import './Pokedex.scss';

class Pokedex extends Component {

  constructor() {
    super();
    this.state = {
      pokemons: [],
      showPokemonDetails: false,
      pokemonDetail: ''
    }
  }

  componentWillMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=2')
      .then(response => response.json())
      .then(data => this.setState({pokemons: data.results}));
  }

  handleOpenPokemonsDetails(url){
    this.setState({showPokemonDetails: true});
    this.setState({pokemonDetail: url});
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
        { this.state.showPokemonDetails ? <PokemonDetails showPokemonDetails={this.state.showPokemonDetails} pokemonUrl={this.state.pokemonDetail}/> : null }
        <ul className="Pokedex-list">
          {pokemonList}
        </ul>
      </div>
    );
  }
}

export default Pokedex;
