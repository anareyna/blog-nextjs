import React from "react";
import classes from "./hero.module.scss";
import Link from "next/link";

export default function hero() {
	return (
		<section
			className={classes.hero}
			style={{ backgroundImage: `url(/images/site/home1.jpeg)` }}
		>
			<div className="post-container">
				<div className={classes.container}>
					<h1 className={classes.title}>Hi, I'm Ani</h1>
					<p className={classes.subtitle}>
						Frontend Developer & Visual Designer
					</p>
					<div className={classes.info}>
						<p>Welcome!</p>

						<p>
							I specialize in bringing your digital visions to
							life with stunning user interfaces and seamless
							interactions.
						</p>
						<p>
							I'm dedicated to turning your design concepts into
							responsive and engaging web experiences.
						</p>
						{/* <p>
							Are you in search of an experienced and versatile
							web developer to bring your digital visions to life?
						</p>
						<p>
							Look no further. With over a decade of software
							development expertise, I am your trusted partner for
							crafting exceptional online experiences.
						</p> */}
					</div>

					<Link className={`${classes.btn} no-hv`} href="/contact">
						Get in touch
					</Link>
				</div>
			</div>
		</section>
	);
}
