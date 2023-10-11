import "@/styles/globals.scss";

import Layout from "@/components/layout/layout";
import Head from "next/head";
export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossorigin
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;600&family=Oleo+Script&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}
