import React from "react";

class Taxons extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Sean",
    };
  }

  render() {
    return <div>Hi, {this.state.name}!</div>;
  }
}

export default Taxons;
