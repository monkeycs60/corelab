'use client';

const TextIntro = () => {
	return  (
		
	)
}


const Introduction = () => {

	return (
		<>
			<div
				className='pt-[5.5rem] pb-[1.5rem] text-white bg-cardio-computer-mobile md:hidden'
				id='introduction'>
				<div className='pt-6 px-8 text-center flex flex-col gap-6'>
					<h2 className='text-2xl font-[600]'>Présentation</h2>
					<div className='flex flex-col gap-8 font-thin tracking-wide '>
						<p>
							Véritable outil de{' '}
							<span className='font-semibold'>
								service académique
							</span>{' '}
							de soutien à la recherche clinique, la plateforme{' '}
							<span className='font-semibold'>MIRACL</span>
							<span className='text-secondary font-semibold'>
								.ai{' '}
							</span>
							se positionne comme une passerelle essentielle entre les
							<span className='font-semibold px-1'>
								chercheurs
							</span>{' '}
							du monde académique, les
							<span className='font-semibold px-1'>ingénieurs</span>
							spécialisés en intelligence artificielle et l'
							<span className='font-semibold'>industrie.</span>
						</p>
						<p>
							<span className='font-semibold'>MIRACL</span>
							<span className='font-semibold text-secondary'>
								.ai
							</span>{' '}
							est constituée d’une
							<span className='font-semibold px-1'>
								large base de données multimodales labellisées
							</span>
							par des experts avec des cohortes prospectives et
							rétrospectives de patients présentant différentes
							pathologies cardiaques : amylose, myocardite, syndrome
							coronaire aigu, cardiomyopathies, etc.
						</p>
						<p>
							Cette base de données unique permet de
							<span className='font-semibold px-1'>
								développer de nouveaux outils innovants
							</span>
							pour améliorer le diagnostic et l’évaluation pronostique
							des patients pour une prise en charge toujours plus
							personnalisée.
						</p>
					</div>
				</div>
			</div>
			<div
				className='pt-[5rem] h-screen text-white bg-cardio-computer-desktop justify-end hidden md:flex'
				id='introduction'>
				<div className='px-48 text-center w-[38%] mt-36 flex flex-col gap-24'>
					<h2 className='text-4xl font-[600]'>Qu’est-ce que MIRACL<span className="text-secondary">.ai</span> ?</h2>
					<div className='flex flex-col gap-12 font-thin tracking-wide text-xl leading-9'>
						<p>
							Véritable outil de{' '}
							<span className='font-semibold'>
								service académique
							</span>{' '}
							de soutien à la recherche clinique, la plateforme{' '}
							<span className='font-semibold'>MIRACL</span>
							<span className='text-secondary font-semibold'>
								.ai{' '}
							</span>
							se positionne comme une passerelle essentielle entre les
							<span className='font-semibold px-1'>
								chercheurs
							</span>{' '}
							du monde académique, les
							<span className='font-semibold px-1'>ingénieurs</span>
							spécialisés en intelligence artificielle et l'
							<span className='font-semibold'>industrie.</span>
						</p>
						<p>
							<span className='font-semibold'>MIRACL</span>
							<span className='font-semibold text-secondary'>
								.ai
							</span>{' '}
							est constituée d’une
							<span className='font-semibold px-1'>
								large base de données multimodales labellisées
							</span>
							par des experts avec des cohortes prospectives et
							rétrospectives de patients présentant différentes
							pathologies cardiaques : amylose, myocardite, syndrome
							coronaire aigu, cardiomyopathies, etc.
						</p>
						<p>
							Cette base de données unique permet de
							<span className='font-semibold px-1'>
								développer de nouveaux outils innovants
							</span>
							pour améliorer le diagnostic et l’évaluation pronostique
							des patients pour une prise en charge toujours plus
							personnalisée.
						</p>
					</div>
				</div>
			</div>

		</>
	);
};

export default Introduction;
