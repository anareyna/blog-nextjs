import React from "react";
import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import docco from "react-syntax-highlighter/dist/cjs/styles/prism";
import classes from "./post-content.module.scss";
import PostHero from "../post-hero";
import { formatDate } from "@/lib/general-utils";
import YoutubeEmbed from "@/components/youtube-embed/youtube-embed";

export default function PostContent(props) {
	const { post } = props;
	const imagePath = `/images/${post.image}`;
	const hasLinksSection = post.srcLink || post.demoLink;
	const formattedDate = formatDate(post.date);

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
				<PostHero image={imagePath} />

				<PostHeader title={post.title} image={imagePath} />
				<div className={`${classes.content} post-container`}>
					{post.date && (
						<p className={classes.date}>
							Posted on {formattedDate}
						</p>
					)}
					{hasLinksSection && (
						<div className={classes.postProjectLinks}>
							{post.demoLink && (
								<a
									target="_blank"
									href={post.demoLink}
									rel="noreferrer"
								>
									<span>Go to demo</span>
								</a>
							)}

							{post.srcLink && (
								<a
									target="_blank"
									href={post.srcLink}
									rel="noreferrer"
								>
									<span>View source code</span>
								</a>
							)}
						</div>
					)}
					<ReactMarkdown components={customRenderers}>
						{post.content}
					</ReactMarkdown>

					{post.youtubeId && (
						<>
							<h3>Watch demo video:</h3>
							<YoutubeEmbed embedId={post.youtubeId} />
						</>
					)}
				</div>
			</article>
		</>
	);
}
