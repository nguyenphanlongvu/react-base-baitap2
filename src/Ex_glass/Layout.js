import React, { Component } from "react";
import Face from "./Face";
import Header from "./Header";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Face />
        </div>
      </div>
    );
  }
}
