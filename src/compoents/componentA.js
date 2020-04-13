// ComponentA
import React, { Component } from "react";
import HOC from "./HOC";
 
class ComponentA extends Component {
  render() {
    return <div className="kk">ComponentA33333</div>;
  }
}
 
export default HOC(ComponentA);
