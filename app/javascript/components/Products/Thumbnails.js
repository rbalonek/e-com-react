import React from "react";

class Thumbnail extends React.Component {
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

export default Thumbnail;
