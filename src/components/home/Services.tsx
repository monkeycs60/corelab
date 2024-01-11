'use client';

import CarouselSlider from './CarouselSlider';

const Services = () => {
	return (
		<div
			className=' bg-primary text-white  pb-20 pt-6 md:pt-10  md:pb-18 3xl:pt-16 3xl:pb-24'
			id='services'>
			<div className='flex flex-col gap-8 md:gap-10 3xl:gap-16 3xl:max-w-[1920px] 3xl:m-auto '>
				<h2 className='text-2xl md:text-3xl font-[600] text-center md:text-left md:pl-20 3xl:p-0'>Nos services</h2>
				<CarouselSlider />
			</div>
		</div>
	);
};

export default Services;
