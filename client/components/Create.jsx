import React, { useState, Component, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom'; // will add this in with use for buttons


class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // const createEquipment = props => {

    //   const saveEquipment = () => {

    //     const body = {
    //       itemName: document.querySelector('#nameInput').value,
    //       rarity: document.querySelector('#rarityInput').value,
    //       cost: document.querySelector('#costInput').value,
    //       description: document.querySelector('#descriptionInput').value,
    //       created_by: document.querySelector('#created_byInput').value,
    //       score: 1
    //     };
    

    //     fetch('/api/create', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'Application/JSON'
    //       },
    //       body: JSON.stringify(body)
    //     })
    //       .then(resp => resp.json())
    //       .then((data) => {
    //         console.log(data);
    //       })
    //       .then(()=> {
    //         props.history.push('/');
    //       })
    //       .catch(err => console.log('Equipment fetch /api/equipment: ERROR: ', err));
    //   };
  
    // };
  }

  render () {

    const saveEquipment = props => {

      const body = {
        itemName: document.querySelector('#nameInput').value,
        itemClass: document.querySelector('#classInput').value,
        rarity: document.querySelector('#rarityInput').value,
        cost: document.querySelector('#costInput').value,
        description: document.querySelector('#descriptionInput').value,
        created_by: document.querySelector('#created_byInput').value,
        score: 1
      };

      fetch('/api/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON'
        },
        body: JSON.stringify(body)
      })
        .then(res => res.json())
        // .then((data) => {
        //   console.log(data);
        // })
        .then(()=> {
          props.history.push('/');
        })
        .catch(err => console.log('Equipment fetch /api/equipment: ERROR: ', err));
    };


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
        <div className="createDiv">
          <div className="createInnerDiv">
            <h1>Create</h1>
            <p>Item Name</p>
            <input id="nameInput" className="itemInput" placeholder="Sword of Reckoning"></input>
            <p>Item Class</p>
            <input id="classInput" className="itemInput" placeholder="Weapon"></input>
            <p>Item Rarity</p>
            <input id="rarityInput" className="itemInput" placeholder="Rare"></input>
            <p>Item Cost</p>
            <input id="costInput" className="itemInput" placeholder="1000gp"></input>
            <p>Item Description</p>
            <textarea id="descriptionInput" type="text" className="itemDescriptionInput" placeholder="Damage: 1d6 Slashing + 1d4 Lightning. When you score a critical hit with this weapon, the target has to make a Con save. The DC for this saving throw is eaual to 8+ your Strenth or dexterity modifier + your prof bonus. On a failed save they are Stunned until the end of their next turn."></textarea>   
            <p>Created By</p>
            <input id="created_byInput" className="itemInput" placeholder="Anonymous"></input>      
          </div>
          <div>
            <button className="createBtn" onClick={saveEquipment}>Create</button>
          </div>
        </div>
      </section>
    );
  }
}
  


export default Create;