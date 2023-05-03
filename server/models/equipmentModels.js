require('dotenv').config();
const { Pool, Client } = require('pg');
const pg = require('pg');

const PG_URI = process.env.URI;


module.exports = {
  query: async (text, params, callback) => {
    console.log('query requested: ', text);
    const client = new Client(process.env.URI);
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

