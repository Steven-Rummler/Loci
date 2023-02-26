import { NextApiRequest, NextApiResponse } from "next";

import { lociConnection } from "./mongo"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const loci = await lociConnection;
  await loci.insertOne({ timestamp: Date.now()});
  const results = await loci.find({}).toArray();
  res.status(200).json(results);
}