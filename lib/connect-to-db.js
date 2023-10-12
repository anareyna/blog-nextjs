import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

let mongoClient; // this becomes the cached connection

if (!process.env.MONGODB_URI) {
	throw new Error("Please add your Mongo URI to .env.local");
}

export async function connectToDB() {
	try {
		if (mongoClient) {
			return mongoClient;
		}
		mongoClient = await new MongoClient(uri, options).connect();
		console.log("just connected");
		return { mongoClient };
	} catch (error) {
		console.error("errrr", error);
	}
}
