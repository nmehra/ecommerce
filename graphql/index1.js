import {graphql} from 'graphql';
var readline = require( 'readline');
import  mySchema from  './schema/schema';
import { MongoClient } from 'mongodb'; 
const assert = require('assert');

const MONGO_URL = 'mongodb://localhost:27017/test';

MongoClient.connect(MONGO_URL, (err, db) => {
  assert.equal(null, err);
  console.log('Connected to MongoDB server');

  // The readline interface code
});

var rli = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rli.question( 'client request: ', inputQuery =>
  {
    graphql(mySchema, inputQuery).then(result => {
      console.log('response : ', result.data);
    });

  rli.close();
});
