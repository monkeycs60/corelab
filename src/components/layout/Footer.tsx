import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
	return (
		<div className='bg-secondary text-white flex flex-col gap-3 justify-center items-center'>
			<h2 className='text-center text-2xl'>Contacts</h2>
			<div className='flex gap-5'>
				<Mail className='h-12 w-12 bg-white text-secondary p-2 rounded-full' />
				<Linkedin className='h-8 w-8' />
			</div>
		</div>
	);
};

export default Footer;
