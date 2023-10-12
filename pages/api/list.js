import { connectToDB } from "@/lib/connect-to-db";
// instead you can also use the mongodb.js helper
// import clientPromise from "@/lib/mongodb";
export default async function handler(req, res) {
	try {
		const { mongoClient } = await connectToDB(); // or const mongoClient = await clientPromise;
		const db = mongoClient.db("name_db");
		const collection = db.collection("name_collection");
		const result = await collection.find().toArray();
		res.status(200).json(result);
	} catch (error) {
		console.error(error);
	}
}
