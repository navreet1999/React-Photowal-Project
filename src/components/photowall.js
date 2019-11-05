import React, { Component } from "react";
import Photo from "./photo";

class Photowall extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="photogrid">
          {this.props.post.map((post, index) => (
            <Photo key={index} post={post} onRemove={this.props.onRemove} />
          ))}
        </div>
        <button className="remove-button" onClick={() => this.props.onAdd()}>
          {" "}
          Add{" "}
        </button>
      </React.Fragment>
    );
  }
}
export default Photowall;