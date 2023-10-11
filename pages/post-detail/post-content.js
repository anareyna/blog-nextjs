import React from "react";
import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";

export default function PostContent(props) {
	const { post } = props;
	const imagePath = `/images/posts/${post.image}`;
	return (
		<article>
			<PostHeader title={post.title} image={imagePath} />
			<ReactMarkdown>{post.content}</ReactMarkdown>
		</article>
	);
}
