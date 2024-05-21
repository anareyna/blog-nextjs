import React from "react";
import MainNavigation from "./main-navigation";
import classes from "./layout.module.scss";
import { GoogleAnalytics } from "@next/third-parties/google";
export default function Layout(props) {
	return (
		<>
			<MainNavigation />
			<main className={classes.main}>{props.children}</main>
			<GoogleAnalytics gaId="G-XC5N03N66H" />
		</>
	);
}
