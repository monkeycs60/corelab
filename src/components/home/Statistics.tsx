import Image from 'next/image';
import React from 'react';

const Statistics = () => {
	return (
		<div className='  text-primary flex flex-col gap-8 pt-8 pb-20 px-8'>
			<h2 className='text-2xl font-[600] text-center'>
				Quelques statistiques
			</h2>
			<p className='text-center'>
				La base de données de <span className='font-semibold'>MIRACL</span>
				<span className='font-semibold text-secondary'>.ai</span> est
				constituée aujourd’hui de :
			</p>
			<div className='flex flex-col gap-6'>
				<div className='flex items-center'>
					<Image
						src='/stat1.svg'
						className='h-20 w-20'
						width={100}
						height={125}
						alt='studies'
					/>
					<div className='flex-1 text-[#00A8B3] text-center'>
						<span className='text-3xl font-bold'>12</span>
						<p>études</p>
					</div>
				</div>

				<div className='flex items-center'>
					<Image
						src='/stat2.svg'
						className='h-18 w-20'
						width={110}
						height={100}
						alt='studies'
					/>
					<div className='w-3/4  text-[#FF6B00] text-center'>
						<span className='text-3xl font-bold'>28 256</span>
						<p>patients</p>
					</div>
				</div>

				<div className='flex items-center'>
					<Image
						src='/stat3.svg'
						className='h-20 w-20'
						width={113}
						height={117}
						alt='studies'
					/>
					<div className='w-3/4 text-secondary text-center'>
						<span className='text-xl font-bold'>8 564 026</span>
						<p>images analysées</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Statistics;
