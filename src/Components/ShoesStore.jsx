import React, { Component } from "react";
import data from "../Data/data.json";
import ProductList from "./ProductList";
import Modal from "./Modal";
import ProductCart from "./ProductCart";

export default class ShoesStore extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedProduct: "",

			cart: [],
		};
	}

	handleModal = (productDetails) => {
		this.setState({ selectedProduct: productDetails });
	};

	handleShowCart = (product) => {
		const index = this.state.cart.findIndex((item) => item.id === product.id);
		// If cart already had product, add
		if (index === -1) {
			this.setState((state) => ({
				cart: [...state.cart, { ...product, amount: 1 }],
			}));
		}
		// If cart already had that product, increase amount by 1
		const newCart = [...this.state.cart];
		newCart[index].amount += 1;
		this.setState({ cart: newCart });
	};

	handleDeleteProduct = (productID) => {
		const newCart = this.state.cart.filter((item) => item.id !== productID);

		this.setState({ cart: newCart });
	};

	handleAmountChange = (product, key) => {
		const index = this.state.cart.findIndex((item) => item.id === product.id);

		const newCart = [...this.state.cart];

		if (key === "increase") {
			newCart[index].amount += 1;
			return this.setState({ cart: newCart });
		}
		if (newCart[index].amount !== 1) {
			newCart[index].amount -= 1;
		}
		this.setState({ cart: newCart });
	};

	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-sm bg-dark navbar-dark mb-5">
					{/* Brand/logo */}
					<a
						style={{ fontSize: "32px" }}
						className="navbar-brand mr-5 ml-5"
						href="#"
					>
						SHOES STORE
					</a>
					{/* Links */}
					<ul className="navbar-nav ml-5">
						<li className="nav-item">
							<a className="nav-link" href="#">
								ALL
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								NIKE
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								ADIDAS
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								VANS
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								OTHERS
							</a>
						</li>
					</ul>
				</nav>

				<div className="container">
					<div className="d-flex justify-content-end mb-4">
						<button
							data-toggle="modal"
							data-target="#cartModal"
							className="btn btn-dark rounded-0"
						>
							<span className="p-1 mr-1">your cart</span>
							<i className="fa fa-shopping-cart"></i>
						</button>
					</div>

					<ProductList
						productList={data}
						setStateModal={this.handleModal}
						onCart={this.handleShowCart}
					/>
					<Modal
						content={this.state.selectedProduct}
						onCart={this.handleShowCart}
					/>
					<ProductCart
						cart={this.state.cart}
						onDelete={this.handleDeleteProduct}
						amountChange={this.handleAmountChange}
					/>
				</div>
			</div>
		);
	}
}
