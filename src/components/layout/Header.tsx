"use client";

import Image from 'next/image';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useWindowScroll } from "@uidotdev/usehooks";

const Header = () => {
	const [{ y }] = useWindowScroll();

	return (

		<header className={`z-[999] fixed top-0 w-full h-[5.5rem] bg-[#070F1E] text-white  py-2 px-5 transition-all duration-200 md:px-16 3xl:h-[7rem]    ${y && y > 50 ? 'md:bg-[#070F1E]' : 'md:bg-transparent'
			} `}>
			<div className='m-auto flex justify-between items-center 3xl:max-w-[1920px] 3xl:h-full'>
				<div className='flex items-center gap-4 md:gap-8'>
					<Image
						src='/miracl-logo.svg'
						className='w-14 md:w-[70px]'
						width={452}
						height={402}
						alt='Corelab logo'
					/>
					<h1>
						<span className='font-semibold text-2xl md:text-3xl'>MIRACL</span>
						<span className='text-secondary text-xl md:text-2xl'>.ai</span>
					</h1>
				</div>
				<nav className='md:w-[500px]'>
					<Menu className='w-8 h-8 md:hidden' />
					<ul className='gap-8 justify-between hidden md:flex'>
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
				<Link href='#contact' className='hidden md:block'>
					<button className='bg-secondary text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-secondary transition-all duration-300 3xl:px-10 3xl:py-4'>
						Contact
					</button>
				</Link>
			</div>
		</header>
	);
};

export default Header;
