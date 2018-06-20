import React, { Component } from 'react';
import PokemonCard from '../pokemon_card/PokemonCard';
import PokemonModal from '../pokemon_modal/PokemonModal';
import ReactDOM from 'react-dom';

import './Pokedex.scss';

class Pokedex extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      pokemons: [],
      showPokemonModal: false,
      pokemon: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokedex')
      .then(response => response.json())
      .then(data => this.setState({ pokemons: data.results }));
  }

  handleOpenPokemonModal(pokemon) {
    this.setState({ pokemon: pokemon });
    this.setState({ showPokemonModal: true });
  }

  handleClosePokemonModal() {
    this.setState({ showPokemonModal: false });
  }

  render() {

    function getPokemonId(url) {
      return url.split("/pokemon/")[1].split("/")[0];
    }

    const pokemonList = this.state.pokemons.map(pokemon => {
      pokemon.id = getPokemonId(pokemon.url);
      return (
        <li key={pokemon.url} className="Pokedex-list-item">
          <PokemonCard openPokemonModal={this.handleOpenPokemonModal.bind(this)} pokemon={pokemon} />
        </li>
      );
    });

    return (
      <div className="container Pokedex">
        {this.state.showPokemonModal ? <PokemonModal pokemon={this.state.pokemon} closePokemonModal={this.handleClosePokemonModal.bind(this)} /> : null}
        <ul className="Pokedex-list">
          {pokemonList}
        </ul>
      </div>
    );
  }
}

export default Pokedex;
