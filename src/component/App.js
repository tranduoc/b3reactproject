import React, { Component } from "react";

import "./../css/App.css";
import Databinding from "./Databinding";
import HandleEvent from "./HandleEvent";

class App extends Component {
  state = {
    isLogin: true,
  };
  getInfo = (formValue) => {
    const { name, password } = formValue;
    if (name && password) this.setState({ isLogin: false });
  };

  render() {
    return (
      <div className="container">
        <HandleEvent getInfo={this.getInfo} />
        <Databinding isLogin={this.state.isLogin} />
      </div>
    );
  }
}

export default App;
