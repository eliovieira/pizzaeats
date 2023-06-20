import Order from './Order';

const Footer = () => {
	const hour = new Date().getHours();
	const openHour = 12;
	const closeHour = 22;
	const isOpen = hour >= openHour && hour < closeHour;

	//return <React.createElement('footer', null, "We're currently open!");>
	return (
		<footer className="footer">
			{/* {new Date().toLocaleTimeString()}.{' '} */}
			{isOpen ? (
				<Order closeHour={closeHour} />
			) : (
				<p>
					We're happy to welcome you between {openHour}:00 and {closeHour}:00.
				</p>
			)}
		</footer>
	);
};

export default Footer;
