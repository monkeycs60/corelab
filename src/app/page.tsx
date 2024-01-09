import Introduction from '@/components/home/Introduction';
import Objectives from '@/components/home/Objectives';
import Services from '@/components/home/Services';
import Statistics from '@/components/home/Statistics';
import Team from '@/components/home/Team';

export default  function Home() {
	return (
		<main>
			<Introduction />
			<Objectives />
			<Services />
			<Statistics />
			<Team />
		</main>
	);
}
