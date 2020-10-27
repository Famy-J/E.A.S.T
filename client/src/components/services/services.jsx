import React from "react";
import Service from "./service.jsx";
import servicesData from "./servicesData.js";
import Specifications from "./specifications.jsx";
class Services extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      specificationsOn: false,
      specificationsOff: true,
    };
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  onMouseEnter(e) {
    console.log("enter");
    console.log(e);
    let data = servicesData[e].specifications;
    this.setState({
      data: data,
      specificationsOn: true,
      specificationsOff: false,
    });
  }

  handleClick(e) {
    console.log("outtt");
    this.setState({
      specificationsOff: true,
      specificationsOn: false,
    });
  }

  render() {
      return (
        <div onClick={this.handleClick} onContextMenu={this.handleClick}>
          <div>
            <div className="categories-list">
              <ul className="list-wrapper">
                {servicesData.map((element, key) => (
                  <li>
                    <Service
                      fieldName={element.fieldName}
                      imgUrl={element.imageUrl}
                      id={key}
                      mouseEnter={this.onMouseEnter}
                      // mouseLeave={this.onMouseLeave}
                    />
                  </li>
                ))}
              </ul>
            </div>
            {this.state.specificationsOn ? (
              <Specifications
                specifications={this.state.data}
                handleClick={this.closePopUp}
              />
            ) : null}
          </div>
        </div>
    );
  }
}

export default Services;
