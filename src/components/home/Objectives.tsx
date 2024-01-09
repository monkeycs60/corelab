'use client';

import React from 'react';
import Objective from './Objective';

const Objectives = () => {
	return (
		<div className=' text-black justify-between py-6 px-12 flex flex-col gap-4 text-'>
			<h2 className='text-2xl font-[600] text-center'>Nos objectifs</h2>

			<div className='h-full flex flex-col py-5 gap-4 justify-between'>
				<Objective
					objectiveNumber={1}
					descriptionContent={
						<p>
							<span className='text-secondary block font-semibold px-1'>
								Développer une médecine véritablement personnalisée
							</span>
							guidée par l'imagerie
							<span className='font-semibold px-1'>
								cardiovasculaire multimodale
							</span>
						</p>
					}
				/>
				<Objective
					objectiveNumber={2}
					descriptionContent={
						<p>
							<span className='text-secondary block font-semibold px-1'>
								Améliorer le pronostic des patients
							</span>
							par la
							<span className='font-semibold px-1'>
								création d'outils innovants
							</span>
							de stratification pronostique issus de l'
							<span className='font-semibold'>
								intelligence artificielle
							</span>
						</p>
					}
				/>
				<Objective
					objectiveNumber={3}
					descriptionContent={
						<p>
							<span className='text-secondary block font-semibold px-1'>
								Construire une plateforme de recherche clinique
								transversales
							</span>
							pour{' '}
							<span className='font-semibold px-1'>
								accompagner
							</span>
							des études multicentriques prospectives
						</p>
					}
				/>
				<Objective
					objectiveNumber={4}
					descriptionContent={
						<p>
							<span className='text-secondary block font-semibold px-1'>
								Proposer des modèles d'études cliniques innovants
							</span>
							intégrant
							<span className='font-semibold px-1'>
								imagerie, biomarqueurs et intelligence artificielle
							</span>
						</p>
					}
				/>
			</div>
		</div>
	);
};

export default Objectives;
