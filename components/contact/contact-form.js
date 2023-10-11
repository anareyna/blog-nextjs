import React, { useState } from "react";
import classes from "./contact-form.module.scss";

export default function ContactForm() {
	const [enteredEmail, setEnteredEmail] = useState("");
	const [enteredName, setEnteredName] = useState("");
	const [enteredMessage, setEnteredMessage] = useState("");

	function sendMessageHandler(e) {
		e.preventDefault();

		fetch("/api/contact", {
			method: "POST",
			body: JSON.stringify({
				email: enteredEmail,
				name: enteredName,
				message: enteredMessage,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});
	}
	return (
		<div>
			<h1>How can I help you?</h1>
			<form className={classes.form} onSubmit={sendMessageHandler}>
				<div className={classes.controls}>
					<div className={classes.control}>
						<label htmlFor="email">Your Email</label>
						<input
							type="email"
							id="email"
							required
							value={enteredEmail}
							onChange={(e) => setEnteredEmail(e.target.value)}
						/>
					</div>
					<div className={classes.control}>
						<label htmlFor="name">Your Name</label>
						<input
							type="text"
							id="name"
							required
							value={enteredName}
							onChange={(e) => setEnteredName(e.target.value)}
						/>
					</div>
					<div className={classes.control}>
						<label htmlFor="message">Your Message</label>
						<textarea
							id="message"
							required
							value={enteredMessage}
							onChange={(e) => setEnteredMessage(e.target.value)}
						></textarea>
					</div>
					<div className={classes.actions}>
						<button type="submit">Submit</button>
					</div>
				</div>
			</form>
		</div>
	);
}
