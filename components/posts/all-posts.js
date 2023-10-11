import React from "react";
import classes from "./all-posts.module.scss";
import PostsGrid from "./posts-grid";

export default function AllPosts(props) {
	const { title, posts } = props;
	return (
		<section className="section-container">
			<h1>{title}</h1>
			<PostsGrid posts={posts} />
		</section>
	);
}
