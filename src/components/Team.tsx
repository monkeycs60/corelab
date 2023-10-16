import React from 'react';
import { getTeams } from '../../sanity/sanity-utils';
import { TeamProps } from '@/types/team';
import Image from 'next/image';

const Team = async () => {
	const team = await getTeams();
	// revalidate with next
	
	console.log(team);

	return (
		<div className='flex flex-col gap-12 p-8'>
			<h2 className='text-3xl'>Membres de l'équipe</h2>
			<div className='flex flex-wrap gap-24 items-center justify-center'>
				{team.map((project: TeamProps) => {
					return (
						<div
							key={project._id}
							className='bg-green-300 rounded-2xl w-[300px] h-[400px]  flex flex-col gap-8 items-center'>
							<div className='w-[300px] h-[200px] relative'>
								<Image
									src={project.image}
									className='object-cover rounded-2xl'
									fill
									alt={project.name}
								/>
							</div>
							<div>
								<p>{project.name}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Team;
