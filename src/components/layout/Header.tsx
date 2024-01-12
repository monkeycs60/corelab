"use client";

import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useWindowScroll } from "@uidotdev/usehooks";
import { AnimatePresence } from 'framer-motion';
import useHamburgerMenu from '@/hooks/useHamburgerMenu';
import Hamburger from './Hamburger';

const Header = () => {
	const { isHamburgerOpen, toggleHamburgerMenu } = useHamburgerMenu();
	const [{ y }] = useWindowScroll();

	return (
		<>
			<AnimatePresence mode='wait'>
				{isHamburgerOpen && (
					<Hamburger
						isHamburgerOpen={isHamburgerOpen}
						toggleHamburgerMenu={toggleHamburgerMenu}
					/>
				)}
			</AnimatePresence>

			<header className={`z-[999] fixed top-0 w-full h-[5.5rem] bg-[#070F1E] text-white  py-2 px-5 transition-all duration-200 md:px-16 md:h-[6rem] 3xl:h-[7rem]    ${y && y > 50 ? 'md:bg-[#070F1E]' : 'md:bg-transparent'
				} `}>
				<div className='m-auto flex justify-between items-center h-full 3xl:max-w-[1920px] 3xl:h-full'>
					<Link href="/" className='flex items-center gap-4 md:gap-8'>
						<Image
							src='/miracl-logo.png'
							className='w-14 md:w-[70px]'
							width={453}
							height={403}
							alt='Corelab logo'
						/>
						<h1>
							<span className='font-semibold text-2xl md:text-3xl'>MIRACL</span>
							<span className='text-secondary text-xl md:text-2xl'>.ai</span>
						</h1>
					</Link>
					<nav className='md:w-[500px]'>
						<div className='w-8 h-8 md:hidden'>
							{
								isHamburgerOpen ? <X onClick={toggleHamburgerMenu} className='h-full w-full' /> : <Menu onClick={toggleHamburgerMenu} className='h-full w-full' />
							}
						</div>
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
					<Link href='#contacts' className='hidden md:block'>
						<button className='bg-secondary text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-secondary transition-all duration-300 3xl:px-10 3xl:py-4'>
							Contact
						</button>
					</Link>
				</div>
			</header>
		</>
	);
};

export default Header;
