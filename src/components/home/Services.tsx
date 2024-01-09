'use client';

import CarouselSlider from './CarouselSlider';

const Services = () => {
	return (
		<div
			className=' bg-primary text-white flex flex-col gap-8 pt-8 pb-20'
			id='services'>
			<h2 className='text-2xl md:text-4xl font-[600] text-center'>Nos Services</h2>
				<CarouselSlider />
		</div>
	);
};

export default Services;
