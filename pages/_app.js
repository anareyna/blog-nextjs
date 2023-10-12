import "@/styles/globals.scss";

import Layout from "@/components/layout/layout";
import Head from "next/head";
export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<title>Ana Reyna's Portfolio</title>

				<link
					href="/images/site/logo.png"
					rel="icon"
					type="image/vnd.microsoft.icon"
				/>
				<link
					href="/images/site/logo.png"
					rel="shortcut icon"
					type="image/vnd.microsoft.icon"
				/>
				<link
					href="/images/site/logo.png"
					rel="shortcut icon"
					type="image/x-icon"
				/>
				<link
					href="/images/site/logo.png"
					rel="image_src"
					type="image/jpeg"
				></link>

				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}
