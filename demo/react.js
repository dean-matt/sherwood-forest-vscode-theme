import React from 'react';
import calculate from '../logic/calculate';
import './App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      total: null,
      next: null,
      operation: null
    }
  }

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));

    /*
    this.setState(calculate(this.state, buttonName));
    this.setState(calculate(this.state, buttonName));
    this.setState(calculate(this.state, buttonName));
    */

    let index = Math.floor(Math.random() * 906); // At time of development, the Ndex of pokemon is only continuous to 906, see https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_National_Pok%C3%A9dex_number
    console.log("Getting data for Pokemon ".concat(index));

    fetch('https://pokeapi.co/api/v2/pokemon/'.concat(index), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
  }

  render() {
    return (
      <div className="component-app">
        Tacos
        <Display value={this.state.next || this.state.total || '0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    )
  }
}
export default App
