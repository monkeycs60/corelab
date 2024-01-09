import TeamMember from './TeamMember';

const Team = () => {
	return (
		<div
			className=' bg-primary text-white flex flex-col gap-10 pt-8 pb-12 md:pt-16 md:pb-24 md:gap-20'
			id='team'>
			<h2 className='text-2xl font-[600] text-center md:text-4xl md:text-left md:pl-20'>
				Les responsables de la plateforme
			</h2>
			<div className='flex flex-wrap items-center justify-center md:justify-around gap-4 md:w-[90%] md:m-auto md:flex-nowrap'>
				<TeamMember TeamNumber={1} descriptionContent='Dr Théo Pezel' />
				<TeamMember TeamNumber={1} descriptionContent='Pr Patrick Henry' />
				<TeamMember
					TeamNumber={1}
					descriptionContent='Dr Jean-Guillaume Dillinger'
				/>
				<TeamMember
					TeamNumber={1}
					descriptionContent='Dr Trecy Gonçalves'
				/>
				<TeamMember
					TeamNumber={1}
					descriptionContent='Dr Paul-Jun Martial'
				/>
			</div>
		</div>
	);
};

export default Team;
