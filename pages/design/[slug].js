import React from "react";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "@/lib/posts-util";
export default function PostDetailsPage(props) {
	return <PostContent post={props.post} />;
}

const subdirectory = "design";
export function getStaticProps(context) {
	const { params } = context;
	const { slug } = params;
	const postData = getPostData(subdirectory, slug);
	return {
		props: {
			post: postData,
		},
		revalidate: 600,
	};
}

export function getStaticPaths() {
	const postFilenames = getPostsFiles(subdirectory);
	const slugs = postFilenames.map((filename) =>
		filename.replace(/\.md$/, "")
	);
	return {
		paths: slugs.map((slug) => ({ params: { slug: slug } })),
		fallback: false,
	};
}
