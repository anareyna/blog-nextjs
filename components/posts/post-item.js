import React from "react";
import Link from "next/link";
import classes from "./post-item.module.scss";
import Image from "next/image";

export default function PostItem(props) {
	const { image, title, date, excerpt, slug } = props.post;

	const formattedDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	const imagePath = `/images/posts/${slug}/${image}`;

	return (
		<li>
			<Link href={`/posts/${slug}`}>
				<div>
					<Image
						src={imagePath}
						alt={title}
						width={200}
						height={200}
						layout="responsive"
					/>
				</div>
				<div>
					<h3>{title}</h3>
					<time>{formattedDate}</time>
					<p>{excerpt}</p>
				</div>
			</Link>
		</li>
	);
}
