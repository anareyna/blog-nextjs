import React from "react";
import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-util";
export default function AllPostsPage(props) {
	return <AllPosts title="All posts" posts={props.posts} />;
}

export function getStaticProps() {
	return {
		props: {
			posts: getAllPosts("blog"),
		},
	};
}
