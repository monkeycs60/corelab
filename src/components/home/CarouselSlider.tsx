import * as React from 'react';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import ServiceCard from './ServiceCard';

function CarouselSlider() {


	const services = [
		{
			logo: '/resource1.svg',
			title: 'Accompagnement méthodologique à la conception d’une étude de recherche clinique',
			description:
				'Rédaction du protocole de l’étude, des protocoles d’imagerie, du CRF, du plan d’analyses d’images et statistiques...',
		},
		{
			logo: '/resource2.svg',
			title: 'Collecte et stockage sécurisés des données de l’étude, contrôle qualité',
			description:
				'Expertise dans la pseudonymisation des données d’imagerie, leur transfert et leur stockage sécurisés. Contrôle qualité en temps réel à la réception des images. ',
		},
		{
			logo: '/resource3.png',
			title: 'Construction d’une biobanque pour votre étude',
			description:
				'Expertise pour collecter et analyser les échantillons sanguins à la recherche de biomarqueurs innovants en corrélation avec les biomarqueurs d’imagerie.',
		},
		{
			logo: '/resource4.svg',
			title: 'Lecture et labellisation expertes d’imagerie cardiaque multimodale',
			description:
				'Analyse d’image multimodale standardisée en aveugle par nos médecins experts en scanner, IRM, angiographie...',
		},
		{
			logo: '/resource5.svg',
			title: 'Développement et validation de nouveaux biomarqueurs d’imagerie cardiaque par IA',
			description:
				'Entraînement et validation d’algorithme de traitement d’images deep learning pour améliorer le diagnostic ou la stratification du risque des patients.',
		},
		{
			logo: '/resource6.svg',
			title: 'Valorisation des données et publications scientifiques',
			description:
				'Expertise en biostatistiques et en analyse de données par intelligence artificielle : machine learning supervisé et clustering. Publications d’études ancillaires. ',
		},
	];
	return (
		<>
			<Carousel className='w-[70%] m-auto md:hidden'>
				<CarouselContent>
					{services.map((product, idx) => (
						<CarouselItem key={idx} className='w-full'>
							<ServiceCard
								logoSrc={product.logo}
								title={product.title}
								description={product.description}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className=' h-8 w-8 border-white/80 border-[2px] z-50' />
				<CarouselNext className=' border-white/80 border-[2px] z-50' />
			</Carousel>
			<div className='flex-wrap gap-20 justify-center hidden md:flex md:w-[90%] 3xl:w-[88%] m-auto'>
				{
					services.map((product, idx) => (
						<ServiceCard
							key={idx}
							logoSrc={product.logo}
							title={product.title}
							description={product.description}
						/>
					))

				}
			</div>
		</>
	);
}

export default CarouselSlider;


