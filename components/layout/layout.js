import React from "react";
import MainNavigation from "./main-navigation";

export default function Layout(props) {
	return (
		<>
			<MainNavigation />
			<main className="section-container">{props.children}</main>
		</>
	);
}
