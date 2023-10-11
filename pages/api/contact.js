export default function handler(req, res) {
	if (req.method === "POST") {
		const { email, name, message } = req.body;

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
		};

		res.status(201).json({ message: "Successfully sent!" });

		console.log(newMessage);
	}
}
