import React from "react";
import "./hero.css"

const hero = props =>
  <div className="jumbotron">
  <h1>{props.children}</h1>
  </div>

export default hero;