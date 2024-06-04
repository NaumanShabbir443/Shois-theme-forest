// Scss
import "../../Scss/_Checkout.scss";
// Image Path
import forwardIcon from "../../assets/Images/forward.png";
import ReturntoCart from "../../assets/Images/ReturnToCart.png";
import { Link } from "react-router-dom";
import CommonCart from "./CommonCart";

export default function ContentDetails() {
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
                  <label htmlFor="exampleFormControlInput1" className="form-label mb-4">
                    Enter Your Address Details
                  </label>
                  <input
                    type="number"
                    className="form-control p-3"
                    id="exampleFormControlInput1"
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              <div className="mt-auto d-flex justify-content-between  me-4 countine-res">
                <div className="return">
                  <Link to="" className="ReturntoCart "><span className="me-2"><img src={ReturntoCart} alt="ReturntoCart" /></span>Return to Cart</Link>
                </div>
                <div>
                  <Link to="/cart/verify-code" className="btn btn-dark " style={{ padding: "7px 31px" }}>Continue</Link>
                </div>
              </div>
            </div>

            {/* Second Part */}
            <div className="col-md-5 cart-detail">
              <CommonCart />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
