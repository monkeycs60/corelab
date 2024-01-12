'use client';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Link from 'next/link';

interface HamburgerProps {
    isHamburgerOpen: boolean;
    toggleHamburgerMenu: () => void;
}
const Hamburger = ({
    isHamburgerOpen,
    toggleHamburgerMenu,
}: HamburgerProps) => {

    const variants = {
        open: { opacity: 1, y: 0, height: "75%" },
        closed: { opacity: 0, y: '-100%', height: "0%" },
        exit: { opacity: 0, y: '-100%', height: "0%" },
    };
    return (
        <motion.section
            initial='closed'
            animate={isHamburgerOpen ? 'open' : 'closed'}
            exit='exit'
            variants={variants}
            transition={{ duration: 0.5 }}
            className='fixed left-0 top-0 z-[100] h-screen w-screen overflow-hidden bg-primary text-white font-inter'
        >
            <div className=' flex h-full flex-col  justify-start p-20 text-center text-lg mt-6 sm:text-xl '>
                <div className='flex flex-col gap-6'>
                    <Link
                        href={'#introduction'}
                        className='linkHoverEffect'
                        onClick={toggleHamburgerMenu}
                    >
                        Présentation
                    </Link>
                    <Link
                        href={'#objectives'}
                        className='linkHoverEffect'
                        onClick={toggleHamburgerMenu}
                    >
                        Objectifs
                    </Link>
                    <Link
                        href={'#services'}
                        className='linkHoverEffect'
                        onClick={toggleHamburgerMenu}
                    >
                        Services
                    </Link>
                    <Link
                        href={'#glitch'}
                        className='linkHoverEffect'
                        onClick={toggleHamburgerMenu}
                    >
                        Statistiques
                    </Link>
                    <Link
                        href={'#team'}
                        className='linkHoverEffect'
                        onClick={toggleHamburgerMenu}
                    >
                        Responsables
                    </Link>
                    <Link
                        href={'#contacts'}
                        className='linkHoverEffect underline underline-offset-1'
                        onClick={toggleHamburgerMenu}
                    >
                        Contacts
                    </Link>
                </div>
            </div>
            <X
                size={40}
                className='absolute right-3 top-4'
                onClick={toggleHamburgerMenu}
            />
        </motion.section>
    );
};

export default Hamburger;
