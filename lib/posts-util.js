import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getDirectoryPath(subdirectory) {
	return path.join(process.cwd(), "content", subdirectory);
}

export function getPostsFiles(subdirectory) {
	return fs.readdirSync(getDirectoryPath(subdirectory));
}
export function getPostData(subdirectory, postIdentifier) {
	const postSlug = postIdentifier.replace(/\.md$/, "");
	const fullPath = path.join(
		getDirectoryPath(subdirectory),
		`${postSlug}.md`
	);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);

	const postData = {
		slug: postSlug,
		...data,
		content,
	};

	return postData;
}
export function getAllPosts(subdirectory) {
	const postFiles = getPostsFiles(subdirectory);
	const allPosts = postFiles.map((filename) =>
		getPostData(subdirectory, filename)
	);

	const sortedPosts = allPosts.sort((postA, postB) =>
		postA.date > postB.date ? -1 : 1
	);

	return sortedPosts;
}

export function getFeaturedPosts(subdirectory) {
	const allPosts = getAllPosts(subdirectory);
	const featuredPosts = allPosts.filter((post) => post.isFeatured);
	return featuredPosts;
}
