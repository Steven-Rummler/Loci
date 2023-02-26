import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, { serverApi: ServerApiVersion.v1 });

export const lociConnection = client.connect().then(connection => connection.db('loci').collection('loci'));