import React from "react";
import Image from "next/image";
export default function PostHeader(props) {
	const { image, title } = props;
	return (
		<header>
			<h1>{title}</h1>
			<Image src={image} alt={title} width={200} height={200} />
		</header>
	);
}
