import React from 'react';
import { getTeams } from '../../sanity/sanity-utils';
import { TeamProps } from '@/types/team';
import Image from 'next/image';

const Team = async () => {
	const team = await getTeams();
	console.log(team);

	return (
		<div className='flex flex-col gap-12'>
			<p className='bg-blue-400'>Membres de l'équipe</p>
			<div className='flex flex-col gap-8 items-center justify-center'>
				{team.map((project: TeamProps) => {
					return (
						<div
							key={project._id}
							className='bg-green-300 flex gap-8 items-center p-4'>
							<p>{project.name}</p>
							<div className='w-[300px] h-[200px] relative'>
								<Image
									src={project.image}
									className='object-fit'
									fill
									alt={project.name}
								/>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Team;
