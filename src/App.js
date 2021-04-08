import React, { Component } from 'react';
import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state1 = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 'asc1'
        },
        {
          name: 'Dracula',
          id: 'asr2'
        },
        {
          name: 'Zombie',
          id: 'as1w'
        }
      ]
    };
    this.state = {
      monsters: [],
      searchField: ''
    };

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}))
  }

  handleChange = e => {
    this.setState({searchField: e.target.value})
  }

  render () { 
      const {monsters, searchField } = this.state;
      const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

//      const monsters = this.state.monsters;
//      const searchField = this.state.searchField;

      return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
          <SearchBox
              placeholder='search monsters'
              handleChange= {this.handleChange}
          />
        <CardList monsters={filteredMonsters}>
        </CardList>
      </div>
    );
  }
}

// function App() {
//   return (
//   );
// }

export default App;
