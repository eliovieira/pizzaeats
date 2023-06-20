const Order = ({ closeHour }) => {
	return (
		<div className="order">
			<p>
				We're open until {closeHour}:00. Come visit{' '}
				<span style={{ color: '#f34747' }}>us</span> or order online.
			</p>
			<button className="btn">Order</button>
		</div>
	);
};

export default Order;
