import React from "react";
import "./style.css";

function Card(props) {
  return (
        <div className="card">
          <img src={props.url} alt="#" onClick={props.cardClick} />
        </div>
  )
}

export default Card;
