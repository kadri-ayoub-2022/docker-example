const express = require("express");
const app = express();
const PORT = 4000;
const mongoose = require('mongoose');
const redis = require('redis');

const REDIS_PORT = 6379;
const REDIS_HOST = 'redis';

const redisClient = redis.createClient({
  url: `redis://${REDIS_HOST}:${REDIS_PORT}`,
});
redisClient.on('error', (err) => console.log('Redis Client Error', err));
redisClient.on('connect', () => console.log('connected to redis...'));
redisClient.connect();

const DB_USER = 'root';
const DB_PASSWORD = 'example';
const DB_PORT = 27017;
const DB_HOST = 'mongo';

const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
mongoose
  .connect(URI)
  .then(() => console.log('connected to db...'))
  .catch((err) => console.log('failed to connect to db: ', err));

app.get('/',(req,res,next)=>{
    res.send('<h1> DOCKER </h1>')
});

app.listen(PORT,()=> console.log('server listen at '+PORT));
