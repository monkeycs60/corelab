'use client';

import CarouselSlider from './CarouselSlider';

const Services = () => {
	return (
		<div
			className=' bg-primary text-white flex flex-col gap-8 pb-20 pt-6 md:pb-24 md:pt-16 md:gap-16'
			id='services'>
			<h2 className='text-2xl md:text-4xl font-[600] text-center md:text-left md:pl-20'>Nos Services</h2>
			<CarouselSlider />
		</div>
	);
};

export default Services;
