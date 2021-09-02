import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonIndex: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    if (this.state.pokemonIndex === this.props.pokemons.length - 1) {
      this.setState({
        pokemonIndex: -1,
      });
    }

    this.setState((prevState, _prop) => ({
      pokemonIndex: prevState.pokemonIndex + 1,
    }));
  };

  render() {
    return (
      <div className='pokedex'>
        <Pokemon
          key={this.props.pokemons[this.state.pokemonIndex].id}
          pokemon={this.props.pokemons[this.state.pokemonIndex]}
        />
        <button onClick={this.handleClick}>Próximo Pokemon</button>
      </div>
    );
  }
}

export default Pokedex;
