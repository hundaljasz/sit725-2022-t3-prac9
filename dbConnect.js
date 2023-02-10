require('dotenv').config()
//mongo db connection..

const MongoClient = require ('mongodb').MongoClient;

//database conn
const uri = 'mongodb+srv://jaskirat:test@cluster0.izgkowd.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient (uri, {useNewUrlParser: true})
   client.connect((err,db) => {
      if (!err){
        console.log('MongoDb Connected')
      } else {
        console.log("DB Error: ", err);
        process.exit(1);
      }
   })
module.exports= client;