import Link from "next/link";
import React from "react";
import Logo from "./logo";
import classes from "./main-navigation.module.scss";
import { useRouter } from "next/router";
export default function MainNavigation() {
	const router = useRouter();
	return (
		<header className={classes.header}>
			<div className={`${classes.container} section-container`}>
				<Link href="/" className={`${classes.logoLink} no-hv`}>
					<Logo />
				</Link>
				<nav className={classes.navContainer}>
					<ul className={classes.nav}>
						<li>
							<Link
								className={`${classes.itemLink} no-hv ${
									router.pathname.includes("/blog")
										? classes.isActive
										: ""
								}`}
								href="/blog"
							>
								Blog
							</Link>
						</li>
						<li>
							<Link
								className={`${classes.itemLink} no-hv ${
									router.pathname.includes("/code")
										? classes.isActive
										: ""
								}`}
								href="/code"
							>
								Code
							</Link>
						</li>
						<li>
							<Link
								className={`${classes.itemLink} no-hv ${
									router.pathname.includes("/design")
										? classes.isActive
										: ""
								}`}
								href="/design"
							>
								Design
							</Link>
						</li>
						<li>
							<Link
								className={`${classes.itemLink} no-hv ${
									router.pathname.includes("/contact")
										? classes.isActive
										: ""
								}`}
								href="/contact"
							>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
