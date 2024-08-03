#! /usr/bin/env node

const { Client } = require("pg");
require('dotenv').config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR ( 255 ),
  username VARCHAR ( 255 ),
  added DATE DEFAULT CURRENT_DATE
);

INSERT INTO messages (text, username) 
VALUES
  ('Hi there!', 'Amando'),
  ('Hello world!', 'Charles');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
