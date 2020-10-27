import React from "react";

class Specifications extends React.Component {
  constructor() {
    super();
    // this.handleClick = this.handleClick.bind(this);
  }
  // handleClick() {
  //   this.props.handleClose;
  // }
  render() {
    return (
      <div className="popup-box">
        <div className="box">
          <ul>
            {this.props.specifications.map((element) => (
              <li>{element}</li>
            ))}
          </ul>
          <h5 style={{textAlign: "center", color: "black" }}>Press Any Mouse key to EXIT</h5>

        </div>
      </div>
    );
  }
}
export default Specifications;
