import React from "react";
import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function PostContent(props) {
	const { post } = props;
	const imagePath = `/images/posts/${post.image}`;

	const customRenderers = {
		// img: ({ src, alt }) => (
		// 	<Image
		// 		src={`/images/posts/${src}`}
		// 		alt={alt}
		// 		width={600}
		// 		height={300}
		// 	/>
		// ),
		code(code) {
			const { className, children } = code;
			const language = className ? className.split("-")[1] : "js";
			return (
				<SyntaxHighlighter
					style={docco}
					language={language}
					children={children}
				/>
			);
		},
		p(paragraph) {
			const { node } = paragraph;
			if (node.children[0].tagName === "img") {
				const image = node.children[0];
				return (
					<div className="postImageBlock">
						<Image
							src={`/images/posts/${image.properties.src}`}
							alt={image.properties.alt}
							width={600}
							height={300}
						/>
					</div>
				);
			}
			return <p>{paragraph.children}</p>;
		},
	};

	return (
		<article>
			<PostHeader title={post.title} image={imagePath} />
			<ReactMarkdown components={customRenderers}>
				{post.content}
			</ReactMarkdown>
		</article>
	);
}
