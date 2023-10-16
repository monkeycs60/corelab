/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io', // Ajout du nouveau modèle distant ici
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'img.clerk.com', // Ajout du nouveau modèle distant ici
				port: '',
				pathname: '/**',
			},
		],
	},
};

module.exports = nextConfig;
