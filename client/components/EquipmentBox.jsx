import React from 'react';

const EquipmentBox = ({info}) => {
  const {name, item_class, rarity, cost, description, created_by, score} = info;

  return (
    <div className = "cardBox">
      <div className = "card">
        <div className = "EquipHeadContainer">
          <h3 className = "equipName"> {name} </h3>
        </div>
        <div className="equipDetails">
          
          <div className = "item_class">{item_class}</div>
          <div className = "itemDetails">
            <label className="rarityLabel">Rarity: </label>
            <div className = "rarity">{rarity}</div>
          </div>
          <div className = "itemDescription">
            <label>Description: </label>
            <hr className="line"></hr>
            <div className = "description">{description}</div>
          </div>
          <div className = "itemDetails">
            <label className = "costLabel">Cost: </label>
            <div className = "cost">{cost}</div>
          </div>
          
          <div className = "bottomLine">
            <div className = "scoreDiv">
              <button className = "arrowdown">
              ^
              </button>
              <div className = "scoreNumber">{score}</div>
              <button className = "arrowup">
              ^
              </button>
            </div>
            <div>
              <label className="createdByLabel">Created By: </label>
              <div className = "created_by">{created_by}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default EquipmentBox;