import React from 'react';
import Image from 'next/image';

type ServiceCardProps = {
	logoSrc: string;
	title: string;
	description: string;
};

const ServiceCard = ({ logoSrc, title, description }: ServiceCardProps) => {
	return (
		<div className='flex flex-col gap-2 justify-between text-center text-sm items-center bg-white text-black rounded-xl h-[300px] w-full py-8 px-4 '>
			<Image priority src={logoSrc} alt='logo' width={48} height={48} />
			<h3 className='font-semibold text-left'>{title}</h3>
			<p className='text-sm text-left'>{description}</p>
		</div>
	);
};

export default ServiceCard;
