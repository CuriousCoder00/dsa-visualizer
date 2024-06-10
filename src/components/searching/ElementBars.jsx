/* eslint-disable no-unused-vars */
/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable react/prop-types */
import React, { Component } from "react";
import Rect from "./ElementBar";
import FlipMove from "react-flip-move";

class ElementBars extends Component {
  render() {
    let margin = 5;
    let width = 35;

    let length = this.props.rects.length;
    if (this.props.rects.length > 30) {
      margin = 1;
      width = 30;
    }
    if (this.props.rects.length > 40) {
      margin = 1;
      width = 25;
    }
    if (this.props.rects.length > 50) {
      margin = 1;
      width = 20;
    }
    if (this.props.rects.length >= 70) {
      margin = 1;
      width = 19;
    }
    if (this.props.rects.length >= 80) {
      margin = 1;
      width = 17;
    }
    if (this.props.rects.length >= 90) {
      margin = 1;
      width = 13;
    }
    return (
      <div>
        <FlipMove
          className="flex justify-center items-end"
          duration={this.props.speed}
          easing="cubic-bezier(.12,.36,.14,1.2)"
        >
          {this.props.rects.map((rect, rectidx) => {
            return <Rect marg={margin} wid={width} key={rect.kk} rect={rect} len={length}/>;
          })}
        </FlipMove>
      </div>
    );
  }
}

export default ElementBars;
