import Image from 'next/image';
import React from 'react'

type ObjectiveProps = {
	objectiveNumber: number
	descriptionContent: React.ReactNode
}

const Objective = ({
	objectiveNumber,
	descriptionContent
}: ObjectiveProps) => {
	return (
		<div className=' md:w-[45%] md:flex md:md:justify-center '>
			<div className='flex flex-col items-center text-center gap-3 md:w-1/3 md:text-xl md:leading-8'>
				<Image
					src={`/objective${objectiveNumber}.svg`}
					alt='objective1'
					color='#F33349'
					className='h-12 w-12 md:h-28 md:w-28'
					width={127}
					height={127}
				/>
				{descriptionContent}
			</div>
		</div>
	);
}

export default Objective