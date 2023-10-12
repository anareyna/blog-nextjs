import { MongoClient } from "mongodb";

const URI = process.env.MONGODB_URI;
const DB_COLLECTION = process.env.DB_COLLECTION;

export default async function handler(req, res) {
	if (req.method === "POST") {
		const { email, name, message, date } = req.body;

		if (
			!email ||
			!name ||
			!message ||
			!email.includes("@") ||
			name.trim() === "" ||
			message.trim() === ""
		) {
			res.status(422).json({ message: "Invalid input." });
			return;
		}

		const newMessage = {
			email,
			name,
			message,
			date,
		};

		let client;
		try {
			client = await MongoClient.connect(URI);
		} catch (error) {
			res.status(500).json({ message: "Something went wrong." });
			return;
		}
		const db = client.db("blog_db");
		try {
			const result = await db
				.collection(DB_COLLECTION)
				.insertOne(newMessage);
			newMessage.id = result.insertedId;
		} catch (error) {
			client.close();
			res.status(500).json({ message: "Something went wrong." });
			return;
		}
		client.close();
		res.status(201).json({
			message: "Successfully stored message!",
			newMessage,
		});
	}
}
