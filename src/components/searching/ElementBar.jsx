/* eslint-disable no-unused-vars */
/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable react/prop-types */
import React, { Component } from "react";
class ElementBar extends Component {
  render() {
    return (
      <div
        className={`bg-slate-900 h-5 w-5 rounded`}
        style={{
          height: this.props.rect.width,
          background: this.getColorClass(),
          margin: this.props.marg,
          verticalAlign: "middle",
          width: this.props.wid,
          color: "white",
          textAlign: "center",
        }}
      >
        <div className={`${this.props.len >= 50 ? "rotate-90" : ""}`}>
          {this.props.rect.width}
        </div>
      </div>
    );
  }

  getColorClass = () => {
    if (this.props.rect.isFound) {
      return "green";
    } else if (this.props.rect.isSorting) {
      return "red";
    } else if (this.props.rect.isChecked) {
      return "black";
    } else {
      return "black";
    }
  };
}

export default ElementBar;
