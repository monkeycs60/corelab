import Image from 'next/image';
import React from 'react';

type TeamMemberProps = {
	TeamNumber: number;
	descriptionContent: string;
};

const TeamMember = ({ TeamNumber, descriptionContent }: TeamMemberProps) => {
	return (
		<div className='w-[40%] flex flex-col items-center gap-2'>
			<Image
				src={`/team${TeamNumber}.jpg`}
				alt={`team member number ${TeamNumber}`}
				color='#F33349'
				className='h-28 w-28 rounded-full border-[2px] '
				width={720}
				height={720}
			/>
			<p className='text-center text-[14px] '>{descriptionContent}</p>
		</div>
	);
};

export default TeamMember;
