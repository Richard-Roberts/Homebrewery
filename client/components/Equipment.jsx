import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // will add this in with use for buttons
import EquipmentBox from './EquipmentBox';


class Equipment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedEquip: false,
      equipment: []
    };
  }
  componentDidMount(){
    console.log('hello from equipment.jsx');
    fetch('/api/')
      .then(res => res.json())
      // .then(data => console.log(data))
      .then((equipment) => {
        if (!Array.isArray(equipment)) equipment = [];
        return this.setState({
          equipment,
          fetchedEquip: true
        });
      })
      .catch(error => console.log('Equipment.componentDidMount: get equipment caught error: ', error ));
  }

  render() {
    if (!this.state.equipment) return (
      <div>
        <h1>Delving the dungeon...</h1>
      </div>
    );

    const {equipment} = this.state;
    // console.log(equipment);

    if (!equipment) return null;

    // if (!equipment.length) return (
    //   <div>
    //     <h1>Dragons must have stolen everything!</h1>
    //   </div>
    // );

    const equipElems = equipment.map((equip, i) => {
      return (
        <EquipmentBox
          key = {i}
          info = {equip}
        />
      );
    });
    return (
      <section>
        <header className = "pageHeader">
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
        <div className = "equipList">
          {equipElems}
        </div>
      </section>
    );
  }
}

export default Equipment;