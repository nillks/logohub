import FeedbackForm from '../Layout/FeedbackForm/FeedbackForm';
import Footer from '../Layout/Footer/Footer';
import Header from '../Layout/Header/Header';
import Product from "../Layout/Product/Product";

export default function Catalog() {
	return (
		<>
			<Header />
			<Product />
			<FeedbackForm />
			<Footer />
		</>
	);
}
