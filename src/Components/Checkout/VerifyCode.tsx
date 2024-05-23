// Scss
import { Card } from "react-bootstrap";
import "../../Scss/_Checkout.scss";
// Image Path
import forwardIcon from "../../assets/Images/forward.png";
import ReturntoCart from "../../assets/Images/ReturnToCart.png";
import cartOne from '../../assets/Images/cart-one.png';
import { Link } from "react-router-dom";

export default function VerifyCode() {
	return (
		<>
			<section className="content-detail">
				<div className="container">
					<div className="row">
						<div className="col-md-7 mt-3 mb-5 border-end d-flex flex-column justify-content-between">
							<div>
								<span className="phone-number">Phone Number</span>
								<span>
									<img src={forwardIcon} className="ms-2 me-2" alt="forwardIcon" />
								</span>
								<span>Address</span>
								<span>
									<img src={forwardIcon} className="ms-2 me-2" alt="forwardIcon" />
								</span>
								<span>Payment</span>

								<div className="mb-3 mt-5 content-input">
									<label htmlFor="exampleFormControlInput1" className="form-label mb-2">
										Verify Phone Number
									</label>
									<p className="digit-code">Enter 6-digit code sent to 0321-7654321 <span style={{ color: "#005BD3" }}>Change</span></p>
									<input
										type="text"
										className="form-control p-3"
										id="exampleFormControlInput1"
										placeholder="Verification Code"
									/>
									<div className="text-end mt-3 me-3 resend-code">
										<span>Don’t see a code? <span style={{ color: "#005BD3" }}>Resend Code</span></span>
									</div>
								</div>
							</div>

							<div className="mt-auto d-flex justify-content-between  me-4 countine-res">
								<div className="return">
									<Link to="" className="ReturntoCart "><span className="me-2"><img src={ReturntoCart} alt="ReturntoCart" /></span>Return to Cart</Link>
								</div>
								<div>
									<button type="button" className="btn btn-dark " style={{ padding: "7px 31px" }}>Continue</button>
								</div>
							</div>
						</div>

						{/* Second Part */}
						<div className="col-md-5 cart-detail">
							<div className='side-bar mt-4'>
								<Card className="border-top-0">
									<Card.Body className="d-flex align-items-center justify-content-between card-responsive">
										<div className="me-md-2 mb-3 mb-md-0 position-relative">
											<img src={cartOne} alt="cartOne" />
											<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
												9
												<span className="visually-hidden">unread messages</span>
											</span>
										</div>
										<div className="text-center text-md-start">
											<p className="mb-0 cart-title">One Life Gray Shoes - Men</p>
											<p className="shoe-color">Yellow / Medium</p>
										</div>
										<div className="ms-md-3 mt-3 mt-md-0 text-center text-md-end">
											<p className="cart-price">Rs. 5,900</p>
										</div>
									</Card.Body>
								</Card>
								<Card className="border-top-0">
									<Card.Body className="d-flex align-items-center justify-content-between card-responsive">
										<div className="me-md-2 mb-3 mb-md-0 position-relative">
											<img src={cartOne} alt="cartOne" />
											<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
												9
												<span className="visually-hidden">unread messages</span>
											</span>
										</div>
										<div className="text-center text-md-start">
											<p className="mb-0 cart-title">One Life Gray Shoes - Men</p>
											<p className="shoe-color">Yellow / Medium</p>
										</div>
										<div className="ms-md-3 mt-3 mt-md-0 text-center text-md-end">
											<p className="cart-price">Rs. 5,900</p>
										</div>
									</Card.Body>
								</Card>
								<Card className="border-top-0">
									<Card.Body className="d-flex align-items-center justify-content-between card-responsive">
										<div className="me-md-2 mb-3 mb-md-0 position-relative">
											<img src={cartOne} alt="cartOne" />
											<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
												9
												<span className="visually-hidden">unread messages</span>
											</span>
										</div>
										<div className="text-center text-md-start">
											<p className="mb-0 cart-title">One Life Gray Shoes - Men</p>
											<p className="shoe-color">Yellow / Medium</p>
										</div>
										<div className="ms-md-3 mt-3 mt-md-0 text-center text-md-end">
											<p className="cart-price">Rs. 5,900</p>
										</div>
									</Card.Body>
								</Card>


								{/* Cart End Calculation */}
								<section className='cart-end border-top'>
									<div className='d-flex justify-content-between'>
										<div><p className='cart-subTotal'>Subtotal</p></div>
										<div><p className='cart-subTotal'>Rs. 168</p></div>
									</div>
									<div className='d-flex justify-content-between border-bottom '>
										<div><p className='cart-subTotal'>Shipping</p></div>
										<div><p className='cart-subTotal'>Rs. 200</p></div>
									</div>

									<div className='d-flex justify-content-between mt-4 '>
										<div><p className='cart-Total'>Total</p></div>
										<div><p className='cart-Total'>Rs. 16,610</p></div>
									</div>

								</section>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
