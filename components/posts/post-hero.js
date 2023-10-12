import React from "react";
import classes from "./post-hero.module.scss";

export default function PostHero(props) {
	const { image } = props;
	return (
		<div
			className={classes.heroImage}
			style={{ backgroundImage: `url(${image})` }}
		></div>
	);
}
