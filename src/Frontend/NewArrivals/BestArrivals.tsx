import Heart from "../Custom/Heart";
import plus from "../../assets/Images/plus.png";
import shoes from "../../assets/Images/shoes.png";
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";


export default function BestArrivals() {
	return (
		<div>
			<div className="container best-seller">
				<p className="best-arrivals">Best Seller</p>
				<div className="row">
					<div className="col-md-4">
						<div className="card border-0" >
							<div className="position-relative">
								<div className="like-icon position-absolute top-0 end-0 p-3">
									<Heart />
								</div>
								<div className="plus-button position-absolute bottom-0 end-0 p-3">
									<img src={plus} alt="like icon is not found " />
								</div>
								<img src={shoes} className="card-img-top" alt="..." />
							</div>
							<div className="card-body">
								<div className="d-flex">
									<div><Rating name="size-medium" defaultValue={2} /></div>
									<div className="ms-2"><span>4.5/5</span></div>
								</div>
								<div className="mt-2 mb-2">
									<Link to="/product-details" className="card-title">Air Jordan 1 Final Taxi</Link>
								</div>
								<p className="card-text">Step into unparalleled comfort and style with our Classic Comfort Sneakers. Step into unparalleled comfort and style with our Classic Comfort Sneakers.</p>
								<span className="card-price">€120</span>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card border-0" >
							<div className="position-relative">
								<div className="like-icon position-absolute top-0 end-0 p-3">
									<Heart />
								</div>
								<div className="plus-button position-absolute bottom-0 end-0 p-3">
									<img src={plus} alt="like icon is not found " />
								</div>
								<img src={shoes} className="card-img-top" alt="..." />
							</div>
							<div className="card-body">
								<div className="d-flex">
									<div><Rating name="size-medium" defaultValue={2} /></div>
									<div className="ms-2"><span>4.5/5</span></div>
								</div>
								<div className="mt-2 mb-2">
									<Link to="/product-details" className="card-title">Air Jordan 1 Final Taxi</Link>
								</div>
								<p className="card-text">Step into unparalleled comfort and style with our Classic Comfort Sneakers. Step into unparalleled comfort and style with our Classic Comfort Sneakers.</p>
								<span className="card-price">€120</span>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card border-0" >
							<div className="position-relative">
								<div className="like-icon position-absolute top-0 end-0 p-3">
									<Heart />
								</div>
								<div className="plus-button position-absolute bottom-0 end-0 p-3">
									<img src={plus} alt="like icon is not found " />
								</div>
								<img src={shoes} className="card-img-top" alt="..." />
							</div>
							<div className="card-body">
								<div className="d-flex">
									<div><Rating name="size-medium" defaultValue={2} /></div>
									<div className="ms-2"><span>4.5/5</span></div>
								</div>
								<div className="mt-2 mb-2">
									<Link to="/product-details" className="card-title">Air Jordan 1 Final Taxi</Link>
								</div>
								<p className="card-text">Step into unparalleled comfort and style with our Classic Comfort Sneakers. Step into unparalleled comfort and style with our Classic Comfort Sneakers.</p>
								<span className="card-price">€120</span>
							</div>
						</div>
					</div>
				</div>
				<div className="row mt-4 mb-5">
					<div className="col-md-4">
						<div className="card border-0" >
							<div className="position-relative">
								<div className="like-icon position-absolute top-0 end-0 p-3">
									<Heart />
								</div>
								<div className="plus-button position-absolute bottom-0 end-0 p-3">
									<img src={plus} alt="like icon is not found " />
								</div>
								<img src={shoes} className="card-img-top" alt="..." />
							</div>
							<div className="card-body">
								<div className="d-flex">
									<div><Rating name="size-medium" defaultValue={2} /></div>
									<div className="ms-2"><span>4.5/5</span></div>
								</div>
								<div className="mt-2 mb-2">
									<Link to="/product-details" className="card-title">Air Jordan 1 Final Taxi</Link>
								</div>
								<p className="card-text">Step into unparalleled comfort and style with our Classic Comfort Sneakers. Step into unparalleled comfort and style with our Classic Comfort Sneakers.</p>
								<span className="card-price">€120</span>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card border-0" >
							<div className="position-relative">
								<div className="like-icon position-absolute top-0 end-0 p-3">
									<Heart />
								</div>
								<div className="plus-button position-absolute bottom-0 end-0 p-3">
									<img src={plus} alt="like icon is not found " />
								</div>
								<img src={shoes} className="card-img-top" alt="..." />
							</div>
							<div className="card-body">
								<div className="d-flex">
									<div><Rating name="size-medium" defaultValue={2} /></div>
									<div className="ms-2"><span>4.5/5</span></div>
								</div>
								<div className="mt-2 mb-2">
									<Link to="/product-details" className="card-title">Air Jordan 1 Final Taxi</Link>
								</div>
								<p className="card-text">Step into unparalleled comfort and style with our Classic Comfort Sneakers. Step into unparalleled comfort and style with our Classic Comfort Sneakers.</p>
								<span className="card-price">€120</span>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card border-0" >
							<div className="position-relative">
								<div className="like-icon position-absolute top-0 end-0 p-3">
									<Heart />
								</div>
								<div className="plus-button position-absolute bottom-0 end-0 p-3">
									<img src={plus} alt="like icon is not found " />
								</div>
								<img src={shoes} className="card-img-top" alt="..." />
							</div>
							<div className="card-body">
								<div className="d-flex">
									<div><Rating name="size-medium" defaultValue={2} /></div>
									<div className="ms-2"><span>4.5/5</span></div>
								</div>
								<div className="mt-2 mb-2">
									<Link to="/product-details" className="card-title">Air Jordan 1 Final Taxi</Link>
								</div>
								<p className="card-text">Step into unparalleled comfort and style with our Classic Comfort Sneakers. Step into unparalleled comfort and style with our Classic Comfort Sneakers.</p>
								<span className="card-price">€120</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
