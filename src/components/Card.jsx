import React, { Component } from "react";

export default class Card extends Component {
  render() {
    const { id, name, email } = this.props;
    return (
      <React.Fragment>
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
          <img src={`https://robohash.org/${id}?200x200`} alt={`${name}`} />

          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </React.Fragment>
    );
  }
}
