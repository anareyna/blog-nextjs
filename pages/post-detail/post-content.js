import React from "react";
import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";
const dummyPost = {
	slug: "post-1",
	title: "Post 1",
	date: "2022-01-01",
	excerpt: "This is the excerpt of the post 1",
	image: "post-1.jpg",
	content: "# hello",
};

export default function PostContent() {
	const imagePath = `/images/posts/${dummyPost.slug}/${dummyPost.image}`;
	return (
		<article>
			<PostHeader title={dummyPost.title} image={imagePath} />
			<ReactMarkdown>{dummyPost.content}</ReactMarkdown>
		</article>
	);
}
