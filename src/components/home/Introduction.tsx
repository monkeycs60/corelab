import React from 'react';

const Introduction = () => {
	return (
		<div className='pt-[5.5rem] pb-[1.5rem] bg-cardio-computer text-white'>
			<div className='pt-6 px-8 text-center flex flex-col gap-6'>
				<h2 className='text-2xl font-[600]'>Présentation</h2>
				<div className='flex flex-col gap-8 font-thin tracking-wide '>
					<p>
						Véritable outil de{' '}
						<span className='font-bold'>service académique</span> de
						soutien à la recherche clinique, la plateforme{' '}
						<span className='font-bold'>MIRACL</span>
						<span className='text-secondary font-bold'>.ai </span>
						se positionne comme une passerelle essentielle entre les
						<span className='font-bold px-1'>chercheurs</span> du monde
						académique, les
						<span className='font-bold px-1'>ingénieurs</span>
						spécialisés en intelligence artificielle et l'
						<span className='font-bold'>industrie.</span>
					</p>
					<p>
						<span className='font-bold'>MIRACL</span>
						<span className='font-bold text-secondary'>.ai</span> est
						constituée d’une
						<span className='font-bold px-1'>
							large base de données multimodales labellisées
						</span>
						par des experts avec des cohortes prospectives et
						rétrospectives de patients présentant différentes pathologies
						cardiaques : amylose, myocardite, syndrome coronaire aigu,
						cardiomyopathies, etc.
					</p>
					<p>
						Cette base de données unique permet de
						<span className='font-bold px-1'>
							développer de nouveaux outils innovants
						</span>
						pour améliorer le diagnostic et l’évaluation pronostique des
						patients pour une prise en charge toujours plus personnalisée.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Introduction;
