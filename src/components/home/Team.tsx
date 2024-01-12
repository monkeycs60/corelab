import TeamMember from './TeamMember';

const Team = () => {
	return (
		<div
			className=' bg-primary text-white pt-8 pb-12 md:pt-10 md:pb-10 3xl:pt-16 3xl:pb-24'
			id='team'>
			<div className='flex flex-col gap-10 md:gap-20 3xl:max-w-[1920px] 3xl:m-auto'>
				<h2 className='text-2xl font-[600] text-center md:text-3xl md:text-left md:pl-20 3xl:pl-0'>
					Les responsables de la plateforme
				</h2>
				<div className='flex flex-wrap items-center justify-center md:justify-around gap-4 md:w-[90%] md:m-auto md:flex-nowrap'>
					<TeamMember TeamNumber={1} descriptionContent='Dr Théo Pezel' />
					<TeamMember TeamNumber={2} descriptionContent='Pr Patrick Henry' />
					<TeamMember
						TeamNumber={3}
						descriptionContent='Dr Jean-Guillaume Dillinger'
					/>
					<TeamMember
						TeamNumber={4}
						descriptionContent='Dr Trecy Gonçalves'
					/>
					<TeamMember
						TeamNumber={5}
						descriptionContent='Dr Paul-Jun Martial'
					/>
				</div>
			</div>
		</div>
	);
};

export default Team;
