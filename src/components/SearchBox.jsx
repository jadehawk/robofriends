import React, { Component } from "react";

export default class SearchBox extends Component {
  render() {
    return (
      <div className="pa2">
        <input
          type="search"
          placeholder="Search for Friend"
          className="pa3 ba b--green bg-lightest-blue"
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
