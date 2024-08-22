import About from '../Layout/About/About';
import BetterOffer from '../Layout/BetterOffer/BetterOffer';
import FAQ from '../Layout/FAQ/FAQ';
import FeedbackForm from '../Layout/FeedbackForm/FeedbackForm';
import Footer from '../Layout/Footer/Footer';
import Header from '../Layout/Header/Header';
import Offer from '../Layout/Offer/Offer';
import PopularProduct from '../Layout/PopularProduct/PopularProduct';

export default function Home() {
	return (
		<>
			<Header />
			<PopularProduct />
			<BetterOffer />
			<About />
			<Offer />
			<FAQ />
			<FeedbackForm />
			<Footer />
		</>
	);
}
