import React, { useState, useEffect } from "react";
import classes from "./contact-form.module.scss";
import Notification from "../ui/notification";

async function sendContactData(contactDetails) {
	const response = await fetch("/api/contact", {
		method: "POST",
		body: JSON.stringify(contactDetails),
		headers: {
			"Content-Type": "application/json",
		},
	});
	const data = await response.json();
	if (!response.ok) {
		setRequestStatus("error");
		throw new Error(data.message || "Something went wrong!");
	}
}
export default function ContactForm() {
	const [enteredEmail, setEnteredEmail] = useState("");
	const [enteredName, setEnteredName] = useState("");
	const [enteredMessage, setEnteredMessage] = useState("");
	const [requestStatus, setRequestStatus] = useState(null);
	const [requestError, setRequestError] = useState(null);

	useEffect(() => {
		if (requestStatus === "error" || requestStatus === "success") {
			const timer = setTimeout(() => {
				setRequestError(null);
				setRequestStatus(null);
			}, 30000);
			return () => {
				clearTimeout(timer);
			};
		}
	}, [requestStatus]);
	async function sendMessageHandler(e) {
		e.preventDefault();

		setRequestStatus("pending");
		try {
			await sendContactData({
				email: enteredEmail,
				name: enteredName,
				message: enteredMessage,
			});

			setRequestStatus("success");

			setEnteredEmail("");
			setEnteredName("");
			setEnteredMessage("");
		} catch (error) {
			setRequestStatus("error");
			setRequestError(error.message);
		}
	}

	let notification;
	if (requestStatus === "success") {
		notification = {
			title: "Success!",
			message: "Message sent successfully!",
			status: "success",
		};
	}

	if (requestStatus === "pending") {
		notification = {
			title: "Sending...",
			message: "Sending message...",
			status: "pending",
		};
	}
	if (requestStatus === "error") {
		notification = {
			title: "Error!",
			message: requestError,
			status: "error",
		};
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
			{notification && (
				<Notification
					title={notification.title}
					message={notification.message}
					status={notification.status}
				/>
			)}
		</div>
	);
}
