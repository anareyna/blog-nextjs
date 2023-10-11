import React from "react";
import Image from "next/image";
import classes from "./post-header.module.scss";
export default function PostHeader(props) {
	const { image, title } = props;
	return (
		<header className="post-container">
			<h1 className={classes.title}>{title}</h1>
		</header>
	);
}
