import React, { Component } from "react";
import Card from "./Card";

export default class CardList extends Component {
  render() {
    const { robots } = this.props;

    return (
      <React.Fragment>
        {robots.map(r => {
          return <Card key={r.email} id={r.id} name={r.name} email={r.email} />;
        })}
      </React.Fragment>
    );
  }
}
