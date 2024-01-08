import Image from 'next/image';
import React from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
	return (
		<header className='z-[999] fixed top-0 w-full h-[5.5rem] bg-[#070F1E] text-white flex py-2 px-5  justify-between items-center'>
			<div className='flex items-center gap-4'>
				<Image
					src='/miracl-logo.svg'
					className='w-14'
					width={507}
					height={530}
					alt='Corelab logo'
				/>
				<h1>
					<span className='font-bold text-2xl'>MIRACL</span>
					<span className='text-secondary text-xl'>.ai</span>
				</h1>
			</div>
			<nav>
				<Menu className='w-8 h-8' />
			</nav>
		</header>
	);
};

export default Header;
