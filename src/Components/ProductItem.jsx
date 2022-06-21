import React from "react";

export default function ProductItem(props) {
	const { product, setStateModal, onCart } = props;
	return (
		<div className="card m-2 rounded-0" style={{ width: 340 }}>
			<img className="card-img-top" src={product.image} alt={product.alias} />
			<div className="card-body">
				<h1 style={{ fontSize: "22px" }} className="card-title">
					{product.name}
				</h1>
				<p className="card-text">{product.price}$</p>
				<button
					data-toggle="modal"
					data-target="#detailModal"
					className="btn btn-dark rounded-0"
					onClick={() => setStateModal(product)}
				>
					<span className="mr-2">more details</span>
				</button>

				<button
					className="btn btn-dark rounded-0 ml-3"
					onClick={() => onCart(product)}
				>
					<span className="mr-2">add to cart</span>
				</button>
			</div>
		</div>
	);
}
