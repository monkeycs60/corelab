import Introduction from '@/components/home/Introduction';
import Objectives from '@/components/home/Objectives';
import Services from '@/components/home/Services';

export default async function Home() {
	return (
		<main>
			<Introduction />
			<Objectives />
			<Services />
		</main>
	);
}
