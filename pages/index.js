import Hero from "../components/homepage/hero";
import { getFeaturedPosts } from "@/lib/posts-util";

export default function HomePage(props) {
	return (
		<>
			<Hero />
			{/* <FeaturedPosts posts={props.posts} /> */}
		</>
	);
}

export function getStaticProps() {
	return {
		props: {
			posts: getFeaturedPosts("blog"),
		},
	};
}
