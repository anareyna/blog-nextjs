import React from "react";
import PostItem from "./post-item";
import classes from "./posts-grid.module.scss";

export default function PostsGrid(props) {
	const { posts } = props;
	return (
		<ul>
			{posts.map((post) => (
				<PostItem key={post.slug} post={post} />
			))}
		</ul>
	);
}
