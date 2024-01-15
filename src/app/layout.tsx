import Header from '@/components/layout/Header';
import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/layout/Footer';
import { getCldOgImageUrl } from 'next-cloudinary';
import { Analytics } from '@vercel/analytics/react';
import { Suspense } from 'react';
import MavenAnalytics from '@/components/MavenAnalytics';

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
			</body>

			<Analytics />
			<Suspense fallback={null}>
				<MavenAnalytics />
			</Suspense>
		</html>
	);
}
