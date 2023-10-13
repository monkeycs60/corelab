import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

export const config = defineConfig({
	projectId: 'qyv5jhgf',
	dataset: 'production',
	apiVersion: '2023-10-13',
    basePath: '/admin',
    plugins: [deskTool()],
	useCdn: true,
});
