import React from "react";
import "./style.css";

function Score(props) {
  return (
    <div className="Score">

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#" onClick={props.reset}>Reset Game</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Theme
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#" onClick={props.pokemon}>Pokemon</a>
                <a className="dropdown-item" href="#" onClick={props.HIMYM}>How I Met Your Mother</a>
                <a className="dropdown-item" href="#" onClick={props.friends}>Friends</a>
              </div>
            </li>
          </ul>
        </div>
        <span className="navbar-text navbar-center">
          <h5>{props.message}</h5>
        </span>
        <span className="navbar-text navbar-right">
          <h5>Score: {props.score} | Top Score: {props.topScore}</h5>
        </span>
      </nav>
    </div>
  )
}

export default Score;