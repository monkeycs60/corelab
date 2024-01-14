import Header from '@/components/layout/Header';
import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/layout/Footer';
import { getCldOgImageUrl } from 'next-cloudinary';
import GoogleAnalytics from '@/components/layout/GoogleAnalytics';
import CookieBanner from '@/components/layout/CookieBanner';
import CookieConsentBanner from '@/components/layout/CookieConsentBanner';
import TagManager from 'react-gtm-module'
import { GoogleTagManager } from '@next/third-parties/google'


export const metadata: Metadata = {
	title: 'Miracl.ai',
	description: 'Miracl.ai est une base de données multimodales labellisées par des experts.',
	openGraph: {
		title: 'Miracl.ai',
		description: 'Miracl.ai est une base de données multimodales labellisées par des experts.',
		images: [
			{
				url: getCldOgImageUrl({
					src: 'opengraphmiracl_neojix',
				}),
				width: 1200,
				height: 627,
			},
		],
	}
};

export const revalidate = 20;

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	return (
		<html lang='fr'>
			<body className='relative font-general overflow-x-hidden'>
				<Header />
				{children}
				<Footer />
				<CookieConsentBanner />
			</body>
			<GoogleTagManager gtmId="GTM-TMH53L8X" />
		</html>
	);
}
