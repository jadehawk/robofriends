import React, { Component } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import "./css/App.css";
import Scroll from "./components/Scroll";

const API = "https://jsonplaceholder.typicode.com/users";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(parsedJSON => this.setState({ robots: parsedJSON }));
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filterRobots = this.state.robots.filter(r =>
      r.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    );

    return (
      <div className="tc">
        <h1 className="f1 ">RobotFriends</h1>
        <SearchBox onChange={this.onSearchChange} />
        {this.state.robots.length === 0 ? (
          <div>
            <div className="loader" />
            <h1>Now Loading!!</h1>
          </div>
        ) : (
          <Scroll>
            <CardList robots={filterRobots} />
          </Scroll>
        )}
      </div>
    );
  }
}
