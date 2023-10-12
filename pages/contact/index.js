import React from "react";
import ContactForm from "@/components/contact/contact-form";
import PostHero from "@/components/posts/post-hero";
import classes from "@/styles/contact.module.scss";
export default function ContactPage() {
	return (
		<>
			<PostHero image="/images/site/mailbox.jpg" />
			<section className="post-container">
				<h1 className={classes.title}>Get in touch</h1>
				<ContactForm />
				<div className={classes.info}>
					<p>
						or you can send me a direct&nbsp;
						<a
							className={classes.email}
							href="mailto:anareymej@gmail.com"
						>
							email
						</a>{" "}
						or find me on
						<br />
						<a
							className={classes.github}
							href="http://github.com/anareyna"
							target="_blank"
						>
							Github
						</a>{" "}
						or&nbsp;
						<a
							className={classes.linkedin}
							href="http://linkedin.com/in/anireyna"
							target="_blank"
						>
							LinkedIn
						</a>
						.
					</p>
					<p>Thanks for stopping by!</p>
				</div>
			</section>
		</>
	);
}
