import Image from 'next/image';
import React from 'react'

const Team = () => {
  return (
		<div className=' bg-primary text-white flex flex-col gap-8 pt-8 pb-20'>
			<h2 className='text-2xl font-[600] text-center'>
				Les responsables de la plateforme
			</h2>
			<div className='flex flex-wrap items-center justify-center gap-4'>
				<div className='w-[40%] flex flex-col items-center gap-2'>
					<Image
						src='/theo.jpg'
						alt='Picture of the author'
						width={720}
						height={720}
						className='h-28 w-28 rounded-full border-[2px] '
					/>
					<p>Dr Théo Pezel</p>
				</div>
				<div className='w-[40%] flex flex-col items-center gap-2'>
					<Image
						src='/theo.jpg'
						alt='Picture of the author'
						width={720}
						height={720}
						className='h-28 w-28 rounded-full border-[2px] '
					/>
					<p>Dr Théo Pezel</p>
				</div>
				<div className='w-[40%] flex flex-col items-center gap-2'>
					<Image
						src='/theo.jpg'
						alt='Picture of the author'
						width={720}
						height={720}
						className='h-28 w-28 rounded-full border-[2px] '
					/>
					<p>Dr Théo Pezel</p>
				</div>
				<div className='w-[40%] flex flex-col items-center gap-2'>
					<Image
						src='/theo.jpg'
						alt='Picture of the author'
						width={720}
						height={720}
						className='h-28 w-28 rounded-full border-[2px] '
					/>
					<p>Dr Théo Pezel</p>
				</div>
				<div className='w-[40%] flex flex-col items-center gap-2'>
					<Image
						src='/theo.jpg'
						alt='Picture of the author'
						width={720}
						height={720}
						className='h-28 w-28 rounded-full border-[2px] '
					/>
					<p>Dr Théo Pezel</p>
				</div>
			</div>
		</div>
  );
}

export default Team