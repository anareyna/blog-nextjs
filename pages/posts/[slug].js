import React from "react";
import PostContent from "../post-detail/post-content";
import { getPostData, getPostsFiles } from "@/lib/posts-util";
export default function PostDetailsPage(props) {
	return <PostContent post={props.post} />;
}

export function getStaticProps(context) {
	const { params } = context;
	const { slug } = params;
	const postData = getPostData(slug);
	return {
		props: {
			post: postData,
		},
		revalidate: 600,
	};
}

export function getStaticPaths() {
	const postFilenames = getPostsFiles();
	const slugs = postFilenames.map((filename) =>
		filename.replace(/\.md$/, "")
	);
	return {
		paths: slugs.map((slug) => ({ params: { slug: slug } })),
		fallback: false,
	};
}
