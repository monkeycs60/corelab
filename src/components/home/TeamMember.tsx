import Image from 'next/image';
import React from 'react';

type TeamMemberProps = {
	TeamNumber: number;
	descriptionContent: string;
};

const TeamMember = ({ TeamNumber, descriptionContent }: TeamMemberProps) => {
	return (
		<div className='w-[40%] flex flex-col items-center gap-2 md:gap-4 md:w-auto 3xl:gap-4'>
			<Image
				src={`/team${TeamNumber}.jpg`}
				alt={`team member number ${TeamNumber}`}
				color='#F33349'
				className='h-28 w-28 rounded-full border-[2px] md:h-32 md:w-32 3xl:h-40 3xl:w-40 '
				width={720}
				height={720}
			/>
			<p className='text-center text-[14px] md:text-[16px]'>{descriptionContent}</p>
		</div>
	);
};

export default TeamMember;
