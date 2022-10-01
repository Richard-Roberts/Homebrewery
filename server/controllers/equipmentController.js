const { Pool, Client } = require('pg');
// const pg = require('pg');

// const PG_URI = 'postgres://nvngxtas:KJQVAx9cjTG8oeR26iyh8dxf0Rer2WlE@heffalump.db.elephantsql.com/nvngxtas'; // DnD

// const pool = new Pool({
//   connectionString: PG_URI
// });

const db = require('../models/equipmentModels');

const equipmentController = {};

const charString = 'SELECT * FROM equipment;';

//PROMISE CHAIN

equipmentController.getEquipment = (req, res, next) => {
  console.log('***** hello from getEquipment *****');
  // console.log(res.query);
  // console.log(charString);
  db.query(charString)
    // .then (data => console.log(data))
    .then(data => {
      // console.log('hello from controller', data.rows);
      res.locals.equipment = data.rows;
      console.log('hello from controller', res.locals.equipment);
      return next();
        
    })
    .catch((err) => { return next({
      log: 'error in getEquipment middleware',
      message: {err: 'error in getEquipment middleware'}
    });});
};

// equipmentController.createEquipment = (req, res, next) => {
//   console.log('****** hello from createEquipment ******');
//   const {  itemName, itemClass, rarity, cost, description, created_by, score } = req.body;
//   const name = req.query.name;
//   // console.log(req.body.itemName);
//   // const text = `
//   // INSERT INTO equipment (_id, itemName, itemClass, rarity, cost, description, created_by, score) 
//   // VALUES (DEFAULT, ${itemName}, ${itemClass}, ${rarity}, ${cost}, ${description}, ${created_by}, ${score}) 
//   // Returning *
//   // `;

//   const text = `
//   INSERT INTO equipment (DEFAULT, 'Another Rope', 'Item', 'common', '5cp', 'its another rope', 'me', 1) 
//   Returning *
//   `;
//   // const params = [ itemName, itemClass, rarity, cost, description, created_by, score ];
//   // console.log(params);
//   db.query(text)
//     .then(data => {
//       res.locals.create = data.rows[0];
//       console.log(res.locals);
//       return next();
//     })
//     .catch((err) => { return next({
//       log: 'error in createEquipment middleware',
//       message: {err: 'error in createEquipment middleware'}
//     });
//     });
// };

//CURRENT WINNER

// equipmentController.createEquipment = async (req, res, next) => {
//   const {  itemName, itemClass, rarity, cost, description, created_by, score } = req.body;
//   try {
//     const text = `
//      INSERT INTO equipment(_id, itemName, itemClass, rarity, cost, description, created_by, score) 
//      VALUES(DEFAULT, $1, $2, $3, $4, $5, $6, $7) 
//      Returning *
//      `;
//     const params = [ itemName, itemClass, rarity, cost, description, created_by, score ];
//     console.log(params);
//     const result = await db.query(text, params, (err) => {return err});
//     console.log(result);
//     res.locals.create = result.rows[0];
//     next();
//   }
//   catch (err) {
//     next({
//       log: 'error in createEquipment middleware',
//       message: {err: 'error in createEquipment middleware'}
//     });
//   }
// };

// Tryin to use pool within this file directly, skipping model (this works but have to restart npm run dev)

// equipmentController.createEquipment =  (req, res, next) => {
//   const {  itemName, itemClass, rarity, cost, description, created_by, score } = req.body;
//   const text = `
//      INSERT INTO equipment(_id, name, item_class, rarity, cost, description, created_by, score) 
//      VALUES(DEFAULT, $1, $2, $3, $4, $5, $6, $7) 
//      Returning *
//      `;
//   const values = [ itemName, itemClass, rarity, cost, description, created_by, score ];
//   console.log(values);
//   db.query(text, values, (err, result) => {
//     console.log(err, res);
//     res.locals.create = result.rows[0];
//     db.end();
//     return next();
//   });
// };

// tinkertime

equipmentController.createEquipment =  (req, res, next) => {
  const {  itemName, itemClass, rarity, cost, description, created_by, score } = req.body;
  const text = `
     INSERT INTO equipment(_id, name, item_class, rarity, cost, description, created_by, score) 
     VALUES(DEFAULT, $1, $2, $3, $4, $5, $6, $7) 
     Returning *
     `;
  const values = [ itemName, itemClass, rarity, cost, description, created_by, score ];
  console.log(values);
  db.query(text, values)
    .then (data => {
      console.log(res.locals);
      res.locals.create = data.rows[0];
      return next();
    });
};


//   res.locals.create = result.rows[0];
//   next();
  
//     .catch (err) {
//     next({
//       log: 'error in createEquipment middleware',
//       message: {err: 'error in createEquipment middleware'}
//     });
//   }
// };

//CALLBACK

// equipmentController.getEquipment = (req, res, next) => {
//   const params = '';
//   db.query('SELECT * FROM equipment', params, (error, result) => {
//     if (error) return next(error);
//     res.locals.equipment = result.rows;
//     console.log(res.locals);
//     return next();
//   });
// };

// ASYNC FUNCTION

// equipmentController.getEquipment = async (req, res, next) => {
//   console.log('********* hello from getEquipment **********');
//   const equipment = [];
//   try {
//     const text = 'SELECT * FROM equipment;';
//     console.log('hello from async fn getEquipment');
//     const result = await db.query(text);
//     console.log('hello after db.query');
//     const equip = {...result.rows};
//     equipment.push(equip);
//     res.locals.equipment = equipment;
//     next();
//   }
//   catch (err) {return next({
//     log: 'error in getEquipment middleware',
//     message: {err: 'error in getEquipment middleware'}
//   });}
// };

//STACK OVERFLOW DESPERATION

// equipmentController.getEquipment = function() {
//   return new Promise((resolve, reject) => {
//     db.query(
//       'SELECT * FROM equipment;',
//       (error, results) => {
//         if (error) {
//           reject(error);
//         }
//         console.log(results);
//         resolve(results);
//       }
//     );
//   }) ;
// };



module.exports = equipmentController;