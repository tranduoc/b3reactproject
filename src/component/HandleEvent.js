import React, { Component } from "react";

class HandleEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      phone: "",
    };
  }

  isChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleLogin = () => {
    const { name, password, phone } = this.state;
    this.props.getInfo({
      name,
      password,
      phone,
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-6 text-center">
            <div className="row container">
              <div
                className="card text-black bg-white mb-3"
                style={{ maxWidth: "18rem" }}
              >
                <div className="card-header">Hello World</div>
                <div className="card-body">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="username"
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                      onChange={(e) => this.isChange(e)}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      name="password"
                      className="form-control"
                      placeholder="password"
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                      onChange={(e) => this.isChange(e)}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="phone"
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                      onChange={(e) => this.isChange(e)}
                    />
                  </div>
                </div>
                <button
                  onClick={() => this.handleLogin()}
                  type="button"
                  className="btn btn-warning"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
          <div className="col-6 text-center">
            <button type="button" className="btn btn-danger">
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default HandleEvent;
