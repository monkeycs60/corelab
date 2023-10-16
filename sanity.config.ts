import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

export const config = defineConfig({
	title: 'CoreLab',
	projectId: 'qyv5jhgf',
	dataset: 'production',
	apiVersion: '2023-10-13',
	basePath: '/admin',
	plugins: [deskTool()],
	schema: {
		types: schemas,
	},
	useCdn: false,
});
