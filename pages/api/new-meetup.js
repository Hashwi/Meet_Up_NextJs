import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://Hashwi:Np7CwQ2Vez90wxxX@cyberspacecluster.dr2e3yw.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const results = await meetupsCollection.insertOne(data);
    console.log(results);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
