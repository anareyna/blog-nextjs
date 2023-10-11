import Head from "next/head";
import Hero from "../components/homepage/hero";
import FeaturedPosts from "@/components/homepage/featured-posts";
import { getFeaturedPosts } from "@/lib/posts-util";

export default function HomePage(props) {
	return (
		<>
			<Head>
				<title>Portfolio</title>
				<meta name="description" content="" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero />
			<FeaturedPosts posts={props.posts} />
		</>
	);
}

export function getStaticProps() {
	return {
		props: {
			posts: getFeaturedPosts(),
		},
	};
}
