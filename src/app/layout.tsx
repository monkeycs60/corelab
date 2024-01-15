import Header from '@/components/layout/Header';
import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/layout/Footer';
import { getCldOgImageUrl } from 'next-cloudinary';
import { Analytics } from '@vercel/analytics/react';
import { UsermavenAnalytics } from '@/components/usermavenAnalytics';
import { Suspense } from 'react';
import CookieConsentBanner from '@/components/layout/CookieConsentBanner';
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
				{/* <CookieConsentBanner /> */}
			</body>

			{/* Handling analytics */}
			{/* <GoogleTagManager gtmId="GTM-TMH53L8X"  /> */}
			{/* <GoogleTagManager gtmId="G-V94LGPP93X" /> */}
			<Analytics />
			<Suspense fallback={null}>
				<UsermavenAnalytics />
			</Suspense>
		</html>
	);
}
