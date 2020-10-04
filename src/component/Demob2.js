import React, { Component } from "react";

class Demob2 extends Component {
  listInfo = ["An", "Binh", "Hai", "Hung"];

  listUserInfo = () => {
    return this.listInfo.map((value, key) => {
      return <li key={key}>{value}</li>;
    });
  };

  render() {
    return <ul className="list-group">{this.listUserInfo()}</ul>;
  }
}

export default Demob2;
