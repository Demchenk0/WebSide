'use client';
import Header from './../components/Header/Header';
import Essence from './../components/Essence/Essence';
import HeaderMob from './../components/Header/HeaderMob';
import Services from './../components/Services/Services';
import About from './../components/About/About';
import Work from './../components/Work/Work';
import Advantages from './../components/Advantages/Advantages';
import Form from './../components/Form/Form';
import Review from './../components/Review/Review';
import Faq from './../components/Faq/Faq';
import Footer from './../components/Footer/Footer';
import { useMediaQuery } from 'react-responsive';

export default function Home() {
	const isBigScreen = useMediaQuery({ query: '(min-width: 1300px)' });
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1299px)' });
	return (
		<>
			{isTabletOrMobile && <HeaderMob />}
			{isBigScreen && <Header />}
			<main>
				<Essence />
				<Services />
				<About />
				<Work />
				<Advantages />
				<Form />
				<Review />
				<Faq />
			</main>
			<Footer />
		</>
	);
}
