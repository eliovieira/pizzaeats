import PizzaList from './PizzaList';

const Menu = ({ pizzaData }) => {
	// pizzaData = [];
	return (
		<main className="menu">
			<h2>Our menu</h2>

			{pizzaData.length > 0 ? (
				<>
					<p>
						Authentic Italian cuisine. {pizzaData.length} creative dishes to
						choose from. All from our stone oven, all organic, all delicious.
					</p>
					<div className="pizzas">
						<PizzaList pizzaData={pizzaData} />
					</div>
				</>
			) : (
				<p>We're still working on our menu. Please come back later.</p>
			)}
		</main>
	);
};

export default Menu;
