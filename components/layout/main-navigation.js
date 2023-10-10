import Link from "next/link";
import React from "react";
import Logo from "./logo";
import classes from "./main-navigation.module.scss";

export default function MainNavigation() {
	return (
		<header className="section-container">
			<div className={classes.container}>
				<Link href="/" className={classes.logoLink}>
					<Logo />
				</Link>
				<nav className={classes.navContainer}>
					<ul className={classes.nav}>
						<li>
							<Link href="/posts">Posts</Link>
						</li>
						<li>
							<Link href="/contact">Contact</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
