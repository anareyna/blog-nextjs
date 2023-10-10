import Head from "next/head";
import Hero from "../components/homepage/hero";
import FeaturedPosts from "@/components/homepage/featured-posts";

const dummyPosts = [
	{
		slug: "post-1",
		title: "Post 1",
		date: "2022-01-01",
		excerpt: "This is the excerpt of the post 1",
		image: "post-1.jpg",
	},
	{
		slug: "post-2",
		title: "Post 2",
		date: "2022-01-01",
		excerpt: "This is the excerpt of the post 2",
		image: "post-2.jpg",
	},
	{
		slug: "post-3",
		title: "Post 3",
		date: "2022-01-01",
		excerpt: "This is the excerpt of the post 3",
		image: "post-3.jpg",
	},
	{
		slug: "post-4",
		title: "Post 4",
		date: "2022-01-01",
		excerpt: "This is the excerpt of the post 4",
		image: "post-4.jpg",
	},
];
export default function HomePage() {
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
			<FeaturedPosts posts={dummyPosts} />
		</>
	);
}
