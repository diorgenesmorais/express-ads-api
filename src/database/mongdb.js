import mms from 'mongodb-memory-server';
const {MongoMemoryServer} = mms;
import mdb from 'mongodb';
const {MongoClient} = mdb;

let database = null;

async function startDatabase() {
  const mongo = new MongoMemoryServer();
  const mongoDBURL = await mongo.getConnectionString();
  const connection = await MongoClient.connect(mongoDBURL, {useNewUrlParser: true});
  database = connection.db();
}

async function getDatabase() {
  if (!database) await startDatabase();
  return database;
}

export { getDatabase, startDatabase };
