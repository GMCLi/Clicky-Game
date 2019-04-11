import React from "react";
import "./style.css";


function Title() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Clicky Game!</h1>
        <h3>Click on an image to earn points. But if you click on any more than once, you lose!</h3>
      </div>
    </div>
  )
}

export default Title;