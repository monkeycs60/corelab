import { Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
	return (
		<div className='bg-secondary text-white p-6 flex flex-col gap-5 justify-center items-center'>
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
	);
};

export default Footer;
