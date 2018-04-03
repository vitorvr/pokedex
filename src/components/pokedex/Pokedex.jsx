import React, { Component } from 'react';
import PokemonCard from '../pokemon_card/PokemonCard';
import PokemonDetails from '../pokemon_details/PokemonDetails';
import ReactDOM from 'react-dom';

import './Pokedex.scss';

class Pokedex extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      pokemons: [],
      showPokemonDetails: false,
      pokemonDetail: ''
    }
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=802&offset=0')
      .then(response => response.json())
      .then(data => this.setState({pokemons: data.results}));
  }

  handleOpenPokemonsDetails(url) {
    this.setState({pokemonDetail: url});
    this.setState({showPokemonDetails: true});
  }

  handleClosePokemonDetails() {
    this.setState({showPokemonDetails: false});
  }

  render() {

    function getPokemonId(url) {
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
        { this.state.showPokemonDetails ? <PokemonDetails pokemonUrl={this.state.pokemonDetail} closePokemonDetails={this.handleClosePokemonDetails.bind(this)}/> : null }
        <ul className="Pokedex-list">
          {pokemonList}
        </ul>
      </div>
    );
  }
}

export default Pokedex;
