import Header from '@/components/layout/Header';
import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/layout/Footer';




export const metadata: Metadata = {
	title: 'Corelab',
	description: 'Corelab website',
};

export const revalidate = 20;

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='fr' className='!scroll-smooth relative font-general overflow-x-hidden'>
			<body className='3xl:max-w-[1920px]'>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
