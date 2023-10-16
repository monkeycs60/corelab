import { createClient, groq } from 'next-sanity';
import { config } from './config/client-config';

export async function getProjects() {
	return createClient(config).fetch(
		groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
	);
}

export async function getTeams() {
	return createClient(config).fetch(
		groq`*[_type == "team"]{
      _id,
	  createdAt,
      name,
      "slug": slug.current,
      "role": role,
      "image": image.asset->url,
      url,
      content
    }`
	);
}
