import React from "react";

class Properties extends React.Component {
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

export default ShPropertiesow;
