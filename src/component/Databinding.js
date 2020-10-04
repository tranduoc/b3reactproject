import React, { Component } from "react";

class Databinding extends Component {
  name = " Mary Jan";
  value = "Viet Nam Nextop Model";
  constructor(props) {
    super(props);
    // this.state =(

    // )
  }

  render() {
    let image =
      "https://images.pexels.com/photos/902030/pexels-photo-902030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    return (
      <>
        {!this.props.isLogin ? (
          <div
            className="card text-white bg-danger container mt-5"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-header text-center">{this.name}</div>
            <div className="card-body">
              <h5 className="card-title">{this.value}</h5>

              <img src={image} style={{ width: "100%" }} />
            </div>
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default Databinding;
