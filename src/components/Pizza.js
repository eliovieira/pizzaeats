const Pizza = ({ pizza }) => {
	return (
		<div className={pizza.soldOut ? `sold-out pizza` : `pizza`}>
			<img src={pizza.photoName} alt={pizza.name} />
			<div>
				<h3>{pizza.name}</h3>
				<p className="ingredients">{pizza.ingredients}</p>
				<span>{pizza.soldOut ? 'Sold Out' : `${pizza.price}$`}</span>
			</div>
		</div>
	);
};

export default Pizza;
