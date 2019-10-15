const mongoose = require('mongoose');
const config   = require('./src/config'), { db } = config;

mongoose.Promise = Promise;

mongoose.connection.on('connected', () => {
  console.log('Connection Established')
});

mongoose.connection.on('reconnected', () => {
  console.log('Connection Reestablished')
});

mongoose.connection.on('disconnected', () => {
  console.log('Connection Disconnected')
});

mongoose.connection.on('close', () => {
  console.log('Connection Closed')
});

mongoose.connection.on('error', (error) => {
  console.log('ERROR: ' + error)
});

const run = async () => {
  let connectionString = (db.uri.username && db.uri.password) 
    ? `${db.uri.scheme}://${db.uri.username}:${db.uri.password}@${db.uri.host}/${db.uri.name}`
    : `${db.uri.scheme}://${db.uri.host}/${db.uri.name}`;
  await mongoose.connect(connectionString, {
    replicaSet: db.options.replicaSet,
    retryWrites: db.options.retryWrites,
    useNewUrlParser: db.options.useNewUrlParser,
    useUnifiedTopology: db.options.useUnifiedTopology,
    w: db.options.w
  })
};

run().catch(error => console.error(error));
module.exports = mongoose;