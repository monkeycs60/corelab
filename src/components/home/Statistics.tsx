'use client';

import Image from 'next/image';
import React, { useRef, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from "framer-motion"


const Statistics = () => {
	const ref = useRef(null)
	const isInView = useInView(ref)
	const [hasAnimated, setHasAnimated] = useState(false);

	if (isInView && !hasAnimated) {
		setHasAnimated(true);
	}

	return (
		<div
			ref={ref}
			className='  text-primary flex flex-col gap-8 pt-8 pb-16 px-8 md:gap-4 md:pt-16 md:pb-24'
			id='statistics'>
			<h2 className='text-2xl font-[600] text-center md:text-4xl md:text-left md:pl-12'>
				Quelques statistiques
			</h2>
			<p className='text-center md:text-lg md:text-left md:pl-12'>
				La base de données de <span className='font-semibold'>MIRACL</span>
				<span className='font-semibold text-secondary'>.ai</span> est
				constituée aujourd’hui de :
			</p>
			<div className='flex flex-col gap-6 md:flex-row md:justify-between md:w-[80%] 3xl:w-[60%] md:mt-14 md:m-auto md:gap-0'>
				<div className='flex items-center md:flex-col md:justify-center'>
					<Image
						src='/stat1.svg'
						className='h-20 w-20 md:h-28 md:w-28'
						width={100}
						height={125}
						alt='studies'
					/>
					<div className='flex-1 text-[#00A8B3] text-center md:flex-auto md:w-full'>
						<span className='text-3xl font-bold md:text-7xl'>
							{
								hasAnimated ? <CountUp end={12} duration={4} /> : 12
							}
						</span>
						<p>études</p>
					</div>
				</div>

				<div className='flex items-center  md:flex-col'>
					<Image
						src='/stat2.svg'
						className='h-18 w-20 md:h-[105px] md:w-[105px]'
						width={110}
						height={100}
						alt='studies'
					/>
					<div className='w-3/4  text-[#FF6B00] text-center md:w-full'>
						<span className='text-3xl font-bold md:text-7xl'>
							{
								hasAnimated ? <CountUp end={28256} duration={4} /> : 28256
							}
						</span>
						<p>patients</p>
					</div>
				</div>

				<div className='flex items-center  md:flex-col md:items-center md:justify-center'>
					<Image
						src='/stat3.svg'
						className='h-20 w-20 md:h-[100px]  md:w-[100px] '
						width={113}
						height={117}
						alt='studies'
					/>
					<div className='w-3/4 text-secondary text-center md:w-full'>
						<span className='text-3xl font-bold md:text-7xl'>
							{
								hasAnimated ? <CountUp end={8564026} duration={4} /> : 8564026
							}
						</span>
						<p>images analysées</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Statistics;
