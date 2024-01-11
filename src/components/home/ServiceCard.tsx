import React from 'react';
import Image from 'next/image';

type ServiceCardProps = {
	logoSrc: string;
	title: string;
	description: string;
};

const ServiceCard = ({ logoSrc, title, description }: ServiceCardProps) => {
	return (
		<div className='flex flex-col gap-2 justify-between text-center text-sm items-center bg-white text-black rounded-xl w-full h-[300px] py-6 px-4 md:h-auto md:gap-1 md:items-start md:w-[30%] md:text-lg md:px-4 3xl:px-8 3xl:w-[27%] 3xl:h-[300px] 3xl:py-8'>
			<div className='h-16 md:h-12 md:flex md:items-start 3xl:h-16'>
				<Image priority src={logoSrc} alt='logo' width={48} height={48} className='' />
			</div>
			<div className='h-18 md:h-24 3xl:h-24'>
				<h3 className='font-semibold text-left'>{title}</h3>
			</div>
			<div className='h-24 md:h-24 3xl:h-20'>
				<p className='text-sm md:text-[16px] text-left'>{description}</p>
			</div>
		</div>
	);
};

export default ServiceCard;
