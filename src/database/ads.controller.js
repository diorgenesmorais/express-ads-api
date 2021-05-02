import {getDatabase} from './mongdb.js';
import {ObjectID} from './mongodb-imports.js';

const collectionName = 'ads';

async function insertAd(request, response) {
  const ad = request.body;
  const database = await getDatabase();
  const {insertedId} = await database.collection(collectionName).insertOne(ad);
  response.send({message: 'New ad inserted', id: insertedId});
}

async function getAds(request, response) {
  const database = await getDatabase();
  const data = await database.collection(collectionName).find({}).toArray();
  response.send(data);
}

async function deleteAd(request, response) {
  const id = request.params.id;
  const database = await getDatabase();
  await database.collection(collectionName).deleteOne({
    _id: new ObjectID(id),
  });
  response.send({message: 'Ad removed'});
}

async function updateAd(request, response) {
  const id = request.params.id;
  const ad = request.body;
  const database = await getDatabase();
  delete ad._id;
  await database.collection(collectionName).updateOne(
    { _id: new ObjectID(id) },
    {
      $set: {
        ...ad,
      },
    },
  );
  response.send({message: 'Ad updated'});
}


export { insertAd, getAds, deleteAd, updateAd };
