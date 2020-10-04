import React, { Component } from "react";

import "./../css/App.css";

import Adduser from "./AddUser";
import DataTable from "./DataTable";
import Demob2 from "./Demob2";
import Header from "./Header";
import data from "./data.json";
import Demoprops from "./Demoprops";

class App extends Component {
  state = {
    isLogin: true,
    data: data,
  };
  // getInfo = (formValue) => {
  //   const { name, password } = formValue;
  //   if (name && password) this.setState({ isLogin: false });
  // };

  getUserInfo = (name, password, phone) => {
    let item = {};
    item.id = "";
    item.name = name;
    item.password = password;
    item.phone = phone;

    data.push(item);
    this.setState({
      data,
    });
  };

  deleteUser = (id) => {
    this.setState({
      data: data.filter((item) => item.id !== id),
    });

    // this.state.data.forEach((item, index) => {
    //   if (item.id === id) {
    //     data.splice(index, 1);
    //     this.setState({
    //       data,
    //     });
    //   }
    // });
  };
  render() {
    return (
      <div className="container">
        <Header />
        <Adduser
          getUserInfo1={(name, password, phone) => {
            this.getUserInfo(name, password, phone);
          }}
        />

        <DataTable
          userData={this.state.data}
          deleteUser1={(id) => {
            this.deleteUser(id);
          }}
        />

        <Demob2 />
        <Demoprops />
      </div>
    );
  }
}

export default App;
