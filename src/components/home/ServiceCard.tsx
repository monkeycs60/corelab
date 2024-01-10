import React from 'react';
import Image from 'next/image';

type ServiceCardProps = {
	logoSrc: string;
	title: string;
	description: string;
};

const ServiceCard = ({ logoSrc, title, description }: ServiceCardProps) => {
	return (
		<div className='flex flex-col gap-2 justify-between text-center text-sm items-center bg-white text-black rounded-xl w-full h-[300px] md:h-auto md:gap-1 md:items-start md:w-[27%] py-8 px-4 md:text-lg md:px-8 '>
			<div className='h-16 md:h-16 md:flex md:items-start'>
				<Image priority src={logoSrc} alt='logo' width={48} height={48} className='' />
			</div>
			<div className='h-18 md:h-28 3xl:h-24'>
				<h3 className='font-semibold text-left'>{title}</h3>
			</div>
			<div className='h-24 md:h-24 3xl:h-20'>
				<p className='text-sm md:text-[16px] text-left'>{description}</p>
			</div>
		</div>
	);
};

export default ServiceCard;
