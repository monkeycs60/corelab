'use client';

import Image from 'next/image';
import { useMediaQuery } from '@uidotdev/usehooks';
import { Menu } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
	const mobile = useMediaQuery('only screen and (max-width : 768px)');

	return (
		<>
			{mobile ? (
				<header className='z-[999] fixed top-0 w-full h-[5.5rem] bg-[#070F1E] text-white flex py-2 px-5  justify-between items-center'>
					<div className='flex items-center gap-4'>
						<Image
							src='/miracl-logo.svg'
							className='w-14'
							width={452}
							height={402}
							alt='Corelab logo'
						/>
						<h1>
							<span className='font-semibold text-2xl'>MIRACL</span>
							<span className='text-secondary text-xl'>.ai</span>
						</h1>
					</div>
					<nav>
						<Menu className='w-8 h-8' />
					</nav>
				</header>
			) : (
				<header className='z-[999] fixed top-0 w-full h-[7rem] bg-[#070F1E] text-white flex py-2 px-16  justify-between items-center'>
					<div className='flex items-center gap-8'>
						<Image
							src='/miracl-logo.svg'
							className='w-20'
							width={452}
							height={402}
							alt='Corelab logo'
						/>
						<h1>
							<span className='font-semibold text-3xl'>MIRACL</span>
							<span className='text-secondary text-2xl'>.ai</span>
						</h1>
					</div>
					<nav className='w-[500px] '>
						<ul className='flex gap-8 justify-between'>
							<Link
								href='#objectives'
								className='hover:text-secondary transition-all duration-200'>
								<li>Objectifs</li>
							</Link>
							<Link
								href='#services'
								className='hover:text-secondary transition-all duration-200'>
								<li>Services</li>
							</Link>
							<Link
								href='#team'
								className='hover:text-secondary transition-all duration-200'>
								<li>Equipe</li>
							</Link>
						</ul>
					</nav>
					<Link href='#contact' className=''>
						<button className='bg-secondary text-white font-semibold px-10 py-4 rounded-md hover:bg-white hover:text-secondary transition-all duration-300'>
							Contact
						</button>
					</Link>
				</header>
			)}
		</>
	);
};

export default Header;
