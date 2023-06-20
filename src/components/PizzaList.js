import Pizza from './Pizza';

const PizzaList = ({ pizzaData }) => {
	return pizzaData.map((pizza) => {
		return <Pizza pizza={pizza} key={pizza.name} />;
	});
};

export default PizzaList;
