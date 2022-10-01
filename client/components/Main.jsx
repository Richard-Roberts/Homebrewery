import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // will add this in with use for buttons
// import EquipmentBox from './EquipmentBox';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section>
        <header className="pageHeader">
          <div className="headerTitle">Homebrew Compendium</div>
          <div className="LinkButtons">
            <div className="headerButtons">
              <Link to="/">
                <button className="link" type="button">
            Home
                </button>
              </Link>
              <Link to="/equipment">
                <button className="link" type ="button">
            Equipment
                </button>
              </Link>
            </div>
            <div className="createButton">
              <Link to="/create">
                <button className="linkCreate" type ="button">
                  Create
                </button>
              </Link>
            </div>
          </div>
        </header>
        <div className="mainPageDiv">
          <div className = "mainDiv">
            <input className="mainInput" placeholder="this totally works..."></input>
            <button className="createBtn">Submit</button>
          </div>
        </div>
      </section>
    );
  }

}

export default Main;