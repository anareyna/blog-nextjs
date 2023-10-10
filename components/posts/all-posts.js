import React from "react";
import classes from "./all-posts.module.scss";
import PostsGrid from "./posts-grid";

export default function AllPosts(props) {
	return (
		<section>
			<h1>All Posts</h1>
			<PostsGrid posts={props.posts} />
		</section>
	);
}
