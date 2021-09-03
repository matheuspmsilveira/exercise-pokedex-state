import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonIndex: 0,
      pokemonType: 'all',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickTypeFire = this.handleClickTypeFire.bind(this);
    this.handleClickTypePsychic = this.handleClickTypePsychic.bind(this);
    this.filteredPokemons = this.filteredPokemons.bind(this);
  }

  handleClick = () => {
    if (this.state.pokemonType === 'Fire') {
      this.state.pokemonIndex ===
      this.props.pokemons.filter((pokemon) => pokemon.type === 'Fire').length -
        1
        ? this.setState({
            pokemonIndex: 0,
          })
        : this.setState((prevState, _prop) => ({
            pokemonIndex: prevState.pokemonIndex + 1,
          }));
    } else if (this.state.pokemonType === 'Psychic') {
      this.state.pokemonIndex ===
      this.props.pokemons.filter((pokemon) => pokemon.type === 'Psychic')
        .length -
        1
        ? this.setState({
            pokemonIndex: 0,
          })
        : this.setState((prevState, _prop) => ({
            pokemonIndex: prevState.pokemonIndex + 1,
          }));
    } else {
      this.state.pokemonIndex === this.props.pokemons.length - 1
        ? this.setState({
            pokemonIndex: 0,
          })
        : this.setState((prevState, _prop) => ({
            pokemonIndex: prevState.pokemonIndex + 1,
          }));
    }
  };

  handleClickTypeFire = () => {
    if (this.state.pokemonType === 'Fire') return;
    this.setState({
      pokemonIndex: 0,
      pokemonType: 'Fire',
    });
  };

  handleClickTypePsychic = () => {
    if (this.state.pokemonType === 'Psychic') return;
    this.setState({
      pokemonIndex: 0,
      pokemonType: 'Psychic',
    });
  };

  filteredPokemons = () => {
    if (this.state.pokemonType === 'Fire') {
      const firePokemons = this.props.pokemons.filter(
        (pokemon) => pokemon.type === 'Fire'
      );
      return firePokemons[this.state.pokemonIndex];
    } else if (this.state.pokemonType === 'Psychic') {
      const psychicPokemons = this.props.pokemons.filter(
        (pokemon) => pokemon.type === 'Psychic'
      );
      return psychicPokemons[this.state.pokemonIndex];
    } else {
      return this.props.pokemons[this.state.pokemonIndex];
    }
  };

  render() {
    return (
      <div className='pokedex'>
        <Pokemon
          key={this.props.pokemons[this.state.pokemonIndex].id}
          pokemon={this.filteredPokemons()}
        />
        <div>
          <button onClick={this.handleClick}>Próximo Pokemon</button>
          <button onClick={this.handleClickTypeFire}>Pokemons de fogo</button>
          <button onClick={this.handleClickTypePsychic}>
            Pokemons de psychic
          </button>
        </div>
      </div>
    );
  }
}

// APLICAÇAO FEITA COM HOOKS

// function Pokedex({ pokemons }) {
//   const [pokemonIndex, setPokemonIndex] = useState(0);
//   const [pokemonType, setPokemonType] = useState('');

//   const handleClick = () => {
//     if (pokemonType === 'Fire') {
//       pokemonIndex ===
//       pokemons.filter((pokemon) => pokemon.type === 'Fire').length - 1
//         ? setPokemonIndex(0)
//         : setPokemonIndex(pokemonIndex + 1);
//     } else if (pokemonType === 'Psychic') {
//       pokemonIndex ===
//       pokemons.filter((pokemon) => pokemon.type === 'Psychic').length - 1
//         ? setPokemonIndex(0)
//         : setPokemonIndex(pokemonIndex + 1);
//     } else {
//       pokemonIndex === pokemons.length - 1
//         ? setPokemonIndex(0)
//         : setPokemonIndex(pokemonIndex + 1);
//     }
//   };

//   function handleClickTypeFire() {
//     if (pokemonType === 'Fire') return;
//     setPokemonIndex(0);
//     setPokemonType('Fire');
//   }

//   function handleClickTypePsychic() {
//     if (pokemonType === 'Psychic') return;
//     setPokemonIndex(0);
//     setPokemonType('Psychic');
//   }

//   function filteredPokemons() {
//     if (pokemonType === 'Fire') {
//       const firePokemons = pokemons.filter(
//         (pokemon) => pokemon.type === 'Fire'
//       );
//       return firePokemons[pokemonIndex];
//     } else if (pokemonType === 'Psychic') {
//       const psychicPokemons = pokemons.filter(
//         (pokemon) => pokemon.type === 'Psychic'
//       );
//       return psychicPokemons[pokemonIndex];
//     } else {
//       return pokemons[pokemonIndex];
//     }
//   }

//   return (
//     <div className='pokedex'>
//       <Pokemon key={pokemons.id} pokemon={filteredPokemons()} />
//       <div>
//         <button onClick={handleClick}>Próximo Pokemon</button>
//         <button onClick={handleClickTypeFire}>Pokemons de fogo</button>
//         <button onClick={handleClickTypePsychic}>Pokemons de psychic</button>
//       </div>
//     </div>
//   );
// }

export default Pokedex;
