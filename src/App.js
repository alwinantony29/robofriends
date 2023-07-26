import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import Search from './Search';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    onsearchchange = (event) => {
        console.log("function call");
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filteredrobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        console.log(filteredrobots);
        
        return (
            <div className='tc' >
                <h1>Robo friends</h1>
                <Search searchchange={this.onsearchchange} />
                <CardList robots={filteredrobots} />
            </div>
        );
    }
}

export default App;
