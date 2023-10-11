import React from "react";
import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-util";

export default function AllPostsPage(props) {
	return <AllPosts title="Design" posts={props.posts} />;
}

export function getStaticProps() {
	return {
		props: {
			posts: getAllPosts("design"),
		},
	};
}
