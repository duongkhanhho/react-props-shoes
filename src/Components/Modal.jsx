import React from "react";

export default function Modal(props) {
	const { content, onCart } = props;
	return (
		<div>
			<div className="modal" id="detailModal">
				<div className="modal-dialog modal-lg">
					<div className="modal-content rounded-0">
						<div className="modal-header">
							<h4 className="modal-title">{content.name}</h4>
							<button type="button" className="close" data-dismiss="modal">
								×
							</button>
						</div>
						<div className="modal-body">
							<div className="row mt-5">
								<div className="col-lg-4 text-center">
									<img
										className="img-fluid"
										src={content.image}
										alt={content.alias}
									/>
								</div>

								<div className="col-lg-8">
									<div>
										<p style={{ fontSize: "16px" }} className="p-2 mb-2">
											{content.description}
										</p>

										<p style={{ fontSize: "32px" }} className="p-2 mb-2">
											{content.price}$
										</p>
										<p style={{ fontSize: "16px" }} className="p-2 mb-2">
											Number of products left: {content.quantity}
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<button
								className="btn btn-dark rounded-0 mr-auto"
								onClick={() => onCart(content)}
							>
								<span className="mr-2">add to cart</span>
								<i className="fa fa-cart-plus"></i>
							</button>
							<button
								type="button"
								className="btn btn-dark rounded-0"
								data-dismiss="modal"
							>
								close
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
