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
		<div className='flex flex-col items-center text-center'>
			<Image
				src={`/objective${objectiveNumber}.svg`}
				alt='objective1'
				color='#F33349'
				className='h-12 w-12'
				width={127}
				height={127}
			/>
			{descriptionContent}
		</div>
  );
}

export default Objective