import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList(props) {
	const { productList, setStateModal, onCart } = props;
	return (
		<div className="row">
			{productList.map((product) => {
				return (
					<div key={product.id} className="col-4">
						<ProductItem
							product={product}
							setStateModal={setStateModal}
							onCart={onCart}
						/>
					</div>
				);
			})}
		</div>
	);
}
