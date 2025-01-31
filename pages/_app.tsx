import { Fragment } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";
import { NextIntlClientProvider } from 'next-intl';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	return (
		<Fragment>
			<Head>
				<title>Школа Астрологии</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>


			<NextIntlClientProvider
				locale={router.locale}
				timeZone="Europe/Vienna"
				messages={pageProps.messages}
			>
				<Component {...pageProps} />
			</NextIntlClientProvider>
		</Fragment>
	);
}

export default MyApp;
