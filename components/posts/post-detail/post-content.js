import React from "react";
import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import docco from "react-syntax-highlighter/dist/cjs/styles/prism";
import classes from "./post-content.module.scss";

export default function PostContent(props) {
	const { post } = props;
	const imagePath = `/images/${post.image}`;

	const customRenderers = {
		// img: ({ src, alt }) => (
		// 	<Image
		// 		src={`/images/${src}`}
		// 		alt={alt}
		// 		width={600}
		// 		height={300}
		// 	/>
		// ),
		code(code) {
			const { className, children } = code;
			if (className) {
				const language = className.split("-")[1];
				return (
					<SyntaxHighlighter
						style={docco}
						language={language}
						children={children}
					/>
				);
			} else {
				return <code className="code-no-language">{children}</code>;
			}
		},
		p(paragraph) {
			const { node } = paragraph;
			if (node.children[0].tagName === "img") {
				const image = node.children[0];
				return (
					<div className="post-image-block">
						<Image
							src={`/images/${image.properties.src}`}
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
		<>
			<article>
				<div
					className={classes.heroImage}
					style={{ backgroundImage: `url(${imagePath})` }}
				></div>

				<PostHeader title={post.title} image={imagePath} />
				<div className={`${classes.content} post-container`}>
					<ReactMarkdown components={customRenderers}>
						{post.content}
					</ReactMarkdown>
				</div>
			</article>
		</>
	);
}
