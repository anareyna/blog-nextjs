import React from "react";
import Image from "next/image";
import classes from "./hero.module.scss";

export default function hero() {
	return (
		<>
			<section className={classes.hero}>
				<h1 className={classes.title}>Hi, I'm Ani</h1>
				<p className={classes.subtitle}>
					Frontend Developer and Visual Designer
				</p>
				<div className={classes.image}>
					<Image
						src="/images/site/logo.svg"
						alt="Ani logo"
						width={300}
						height={300}
					/>
				</div>
			</section>
		</>
	);
}
