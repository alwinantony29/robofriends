import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import PropTypes from 'prop-types';
import Search from './Search';
import Card from './Card';


class App extends React.Component {
    constructor(PropTypes) {
        super(PropTypes)
        this.state = {
            robots: robots,
            searchfield: ''

        }
    }
    onsearchchange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    render() {
        const filteredrobots = this.state.robots.filter(robot => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc' >
                <h1>Robo friends</h1>
                <Search searchchange={this.onsearchchange} />
                <CardList robots={this.state.robots} />
            </div>
        );
    }
}
export default App;