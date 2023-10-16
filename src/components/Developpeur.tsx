import React from 'react';
import { getProjects } from '../../sanity/sanity-utils';
import { Project } from '@/types/project';
import Image from 'next/image';

const Developpeur = async () => {
	const projects = await getProjects();
	console.log(projects);

	return (
		<div className='flex flex-col gap-12'>
			<p className='bg-blue-400'>Tous mes projets</p>
			<div className='flex flex-col gap-8 items-center justify-center'>
				{projects.map((project: Project) => {
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

export default Developpeur;
