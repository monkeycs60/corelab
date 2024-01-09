import { Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<>
			<div className='bg-secondary text-white p-6 flex flex-col gap-5 justify-center items-center md:hidden' id='contact'>
				<h2 className='text-center font-[600] text-2xl'>Contacts</h2>
				<div className='flex gap-5'>
					<Link
						href='mailto:miracl-ai@gmail.com'
						className='h-10 w-10 rounded-full bg-white flex justify-center items-center'
						target='_blank'>
						<Mail className='  text-secondary ' />
					</Link>
					<Link
						href='linkedin.com/miracl-ai'
						className='h-10 w-10 rounded-full bg-white flex justify-center items-center'
						target='_blank'>
						<Linkedin className='  text-secondary ' />
					</Link>
				</div>
				<div className='flex flex-col justify-center items-center'>
					<p className='underline underline-offset-2'>MIRACL.ai</p>
					<p>Hôpital Lariboisière - AP-HP</p>
					<p>10 rue Ambroise Paré </p>
					<p>75010 Paris</p>
				</div>
			</div>
			<div className='hidden md:flex pt-32 pb-24 px-20 bg-primary justify-between items-start'>
				<div className='flex items-center gap-4 md:gap-8'>
					<Image
						src='/miracl-logo.svg'
						className='w-[70px]'
						width={452}
						height={402}
						alt='Corelab logo'
					/>
					<h1>
						<span className='font-semibold text-white text-2xl md:text-3xl'>MIRACL</span>
						<span className='text-secondary text-xl md:text-2xl'>.ai</span>
					</h1>
				</div>
				<div className='flex w-[60%] gap-10 items-start 3xl:gap-32'>
					<Image src='/map.png' width={485} height={404} className='w-[350px]' alt='Miracl location' />
					<div className='text-white px-6 flex flex-col gap-10 justify-center items-center'>
						<div className='flex gap-10 items-center'>
							<h2 className='text-center font-[600] text-2xl md:text-3xl'>Contact</h2>
							<div className='flex gap-5'>
								<Link
									href='mailto:miracl-ai@gmail.com'
									className='h-12 w-12 rounded-full bg-white flex justify-center items-center'
									target='_blank'>
									<Mail className='  text-primary ' />
								</Link>
								<Link
									href='linkedin.com/miracl-ai'
									className='h-12 w-12 rounded-full bg-white flex justify-center items-center'
									target='_blank'>
									<Linkedin className='  text-primary ' />
								</Link>
							</div>
						</div>
						<div className='flex flex-col  text-lg text-left w-full'>
							<p className='underline underline-offset-2'>MIRACL.ai</p>
							<p>Hôpital Lariboisière - AP-HP</p>
							<p>10 rue Ambroise Paré </p>
							<p>75010 Paris</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
