import React from 'react';
import Image from 'next/image';

type ServiceCardProps = {
	logoSrc: string;
	title: string;
	description: string;
};

const ServiceCard = ({ logoSrc, title, description }: ServiceCardProps) => {
	return (
		<div className='flex flex-col gap-2 justify-between text-center text-sm items-center bg-white text-black rounded-xl w-full md:w-[40%] h-[300px] py-6 px-4 md:h-auto md:gap-4 md:items-start xl:w-[30%] md:text-[16px] 3xl:text-lg md:py-4 md:px-4 3xl:px-8 3xl:w-[27%] 3xl:gap-1 3xl:h-[300px] 3xl:py-8'>
			<div className='h-16 xl:h-12 md:flex md:items-start 3xl:h-16'>
				<Image priority src={logoSrc} alt='logo' width={48} height={48} className='' />
			</div>
			<div className='h-18 xl:h-14 3xl:h-24'>
				<h3 className='font-semibold text-left'>{title}</h3>
			</div>
			<div className='h-24 xl:h-[84px] 3xl:h-20'>
				<p className='text-sm md:text-[14px] 3xl:text-[16px] text-left'>{description}</p>
			</div>
		</div>
	);
};

export default ServiceCard;
