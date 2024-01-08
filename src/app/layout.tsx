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
		<html lang='en' className='!scroll-smooth relative font-general'>
			<body className=''>
				<Header />
				{children}
				<Footer />
				</body>
		</html>
	);
}
