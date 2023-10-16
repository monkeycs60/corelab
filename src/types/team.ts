type BlockContent = {
	_type: 'block';
	children: Array<{
		_key: string;
		_type: 'span';
		marks: string[];
		text: string;
	}>;
	markDefs: Array<{ _key: string; _type: string; [key: string]: any }>;
	style: string;
	[key: string]: any; // This is for any other properties specific to your setup.
};

export type TeamProps = {
	_id: string;
	_type: 'team';
	_rev: string;
	_createdAt: string;
	_updatedAt: string;
	name: string;
	slug: {
		_type: 'slug';
		current: string;
	};
	role: string;
	image: string;
	url: string;
	content: BlockContent[];
};
