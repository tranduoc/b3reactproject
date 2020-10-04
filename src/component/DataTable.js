import React, { Component } from "react";

class DataTable extends Component {
  constructor(props) {
    super(props);
  }

  showData = () => {
    return this.props.userData.map((item, index) => {
      return (
        <tr key={index}>
          <th>{index}</th>
          <td>{item.name}</td>
          <td>{item.password}</td>
          <td>{item.phone}</td>
          <td>
            <button type="button" className="btn btn-success">
              Edit
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                this.props.deleteUser1(item.id);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <table className="table table-dark ">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">User Name</th>
            <th scope="col">Password</th>
            <th scope="col">Phone</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>{this.showData()}</tbody>
      </table>
    );
  }
}

export default DataTable;
