import React from 'react';
import { getTeams } from '../../../sanity/sanity-utils';
import { TeamProps } from '@/types/team';
import Image from 'next/image';

const Team = async () => {
	const team = await getTeams();
	// revalidate with next

	return (
		<div className='flex flex-col gap-12 p-8'>
			<h2 className='text-3xl'>Membres de l'équipe</h2>
			<div className='flex flex-wrap gap-24 items-center justify-center'>
				{team.map((project: TeamProps) => {
					return (
						<div
							key={project._id}
							className='bg-slate-400 rounded-2xl w-[260px] h-[360px]  flex flex-col items-center'>
							<div className='w-[260px] h-[170px] relative'>
								<Image
									src={project.image}
									className='object-cover rounded-2xl'
									fill
									alt={project.name}
								/>
							</div>
							<div className='bg-slate-300 rounded-2xl rounded-tl-none rounded-tr-none w-full h-[190px] py-4 px-3 flex flex-col gap-3'>
								<div className='flex flex-col h-1/2 gap-1 items-center justify-center text-center'>
									<p className='font-bold'>{project.name}</p>
									<p className='text-sm '>{project.role}</p>
								</div>
								<div className='h-[1px] w-1/2 m-auto bg-black'></div>
								<div className='w-full flex items-center justify-center text-center'>
									<p className='text-xs line-clamp-3'>
										{project.content[0].children[0].text}
									</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<div>
				<p className='font-general font-bold text-4xl'>Qu’est-ce que MIRACL.ai ?</p>
			</div>
		</div>
	);
};

export default Team;
