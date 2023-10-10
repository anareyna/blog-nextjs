import React from "react";
import Image from "next/image";
import classes from "./logo.module.scss";

export default function Logo() {
	return (
		<>
			<Image
				className={classes.logo}
				src="/images/site/logo.svg"
				alt="Ani logo"
				width={65}
				height={65}
			/>
		</>
	);
}
