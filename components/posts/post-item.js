import React from "react";
import Link from "next/link";
import classes from "./post-item.module.scss";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function PostItem(props) {
	const { image, title, date, excerpt, slug, category } = props.post;

	const formattedDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	const pathname = usePathname();
	const formattedPathname = pathname.split("/").pop() || category;
	const imagePath = `/images/${image}`;

	return (
		<li className={classes.postItem}>
			<Link
				href={`/${formattedPathname}/${slug}`}
				className={classes.postLink}
			>
				<div className={classes.postImageContainer}>
					<Image
						className={classes.postImage}
						src={imagePath}
						alt={title}
						width={400}
						height={400}
					/>
				</div>
				<div className={classes.postInfo}>
					<h3>{title}</h3>
					<time>{formattedDate}</time>
					<p>{excerpt}</p>
				</div>
			</Link>
		</li>
	);
}
