const team = {
	name: 'team',
	title: 'Team',
	type: 'document',
	fields: [
		{
			name: 'createdAt',
			title: 'Created At',
			type: 'datetime',
			options: {
				readOnly: true, // Pour s'assurer que la date n'est pas modifiée manuellement
			},
		},
		{
			name: 'name',
			title: 'Name',
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
			title: 'Role',
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
					title: 'Alt',
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
			title: 'Content',
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
