import React from "react";
import MainNavigation from "./main-navigation";
import classes from "./layout.module.scss";

export default function Layout(props) {
	return (
		<>
			<MainNavigation />
			<main className={classes.main}>{props.children}</main>
		</>
	);
}
