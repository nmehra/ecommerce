import path from 'path';
import express from 'express';
import httpGraphQlServer from 'express-graphql';
import mongoose from 'mongoose';

import schema from './graphql/schema/schema';

mongoose.connect('mongodb://localhost:27017/graphql');
var db = mongoose.connection;
db.on('error', ()=>{
  console.log('error in connecting to db');
})
db.once('open', ()=>{
  console.log('connected to db');
});

var app = express();
app.use('/graphql', httpGraphQlServer({
  schema: schema,
    context: { db },
    graphiql: true 
}));

app.use(express.static('public'));

app.listen(3001, ()=>{
  console.log('express is running');
});

app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/index.html');
});
