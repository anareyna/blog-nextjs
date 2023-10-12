import React from "react";
import Link from "next/link";
import classes from "./post-item.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { formatDate } from "@/lib/general-utils";

export default function PostItem(props) {
	const { image, title, date, excerpt, slug, category, demoLink, srcLink } =
		props.post;

	const formattedDate = formatDate(date);

	const router = useRouter();
	const pathname = router.pathname;
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
