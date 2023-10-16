const team = {
	name: 'team',
	title: 'Team',
	type: 'document',
	fields: [
		{
			name: 'id',
			title: 'N° ID du membre',
			type: 'string',	
		},
		{
			name: 'name',
			title: 'Nom',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'name',
			},
		},
		{
			name: 'role',
			title: 'Position/Role',
			type: 'string',
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: 'alt',
					title: 'Description de la photo (3-4 mots max)',
					type: 'string',
				},
			],
		},
		{
			name: 'url',
			title: 'URL',
			type: 'url',
		},
		{
			name: 'content',
			title: 'Biographie',
			type: 'array',
			of: [
				{
					type: 'block',
				},
			],
		},
	],
};

export default team;
