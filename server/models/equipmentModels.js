const keys = require('dotenv').config();
console.log(process.env);
const { Pool, Client } = require('pg');
const pg = require('pg');

const PG_URI = process.env.URI;
//ATTEMPTED CLIENT in place of POOL

// const client = new pg.Client(PG_URI);

// client.connect(function(err) {
//   if(err) {
//     return console.error('could not connect to postgres', err);
//   }
//   client.query('select * from equipment;' , function(err, result) {
//     if(err) {
//       return console.error('error running query', err);
//     }
//     // return result;
//     console.log(result);
//   });
// });


//WILL PULL ITEMS FROM DB


// async function clientDemo() {
//   const client = new Client(PG_URI);
//   await client.connect();
//   const now = await client.query('SELECT * from equipment WHERE equipment._id = 1');
//   await client.end();
//   console.log(now.rows);
//   return now;
// }

// clientDemo();



//ATTEMPTED TO USE CLIENT VERSION INTO EXPORT. sadface

module.exports = {
  query: async (text, params, callback) => {
    console.log('query requested: ', text);
    const client = new Client(PG_URI);
    await client.connect();
    const now = await client.query(text, params, callback);
    await client.end();
    console.log('From equipmentModel :', now);
    return now;
  }
};

const pool = new Pool({
  connnectionString: PG_URI
});

// module.exports = {
//   query: (text, params, callback) => {
//     console.log('query requested: ', text);
//     return pool.query(text, params, callback);
//   }
// };