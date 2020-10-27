import React from "react";
import ServicesData from "./servicesData";
class Service extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.mouseEnter = this.mouseEnter.bind(this);
    // this.mouseLeave = this.mouseLeave.bind(this);
  }
  mouseEnter(e) {
    this.props.mouseEnter(e.target.id);
  }
  // mouseLeave(e) {
  //   this.props.mouseLeave(e.target.id);
  // }

  render() {
    return (

      <div className="text-hover">
        <span id={this.props.id}>
          <img
            className="image-wrapper"
            src={this.props.imgUrl}
            id={this.props.id}
          />
          <div>
            <p
              onMouseOver={this.mouseEnter}
              // onMouseOut={this.mouseLeave}
              id={this.props.id}
            >
              {this.props.fieldName}{" "}
            </p>
          </div>
        </span>
      </div>
    );
  }
}
export default Service;
