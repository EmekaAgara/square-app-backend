const {MongoClient} = require('mongodb');
require('dotenv').config();

const uri =process.env.MONGO_DB_URI;

let client;

const getDB = () => {

    if (!client){
        client = new MongoClient(uri);
    }
    const database = client.db('test');
    const products = database.collection('products');
    const orders = database.collection('orders');

    return{
        products,
        orders,
    };
};

module.exports = getDB
