import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import forwardIcon from "../../assets/Images/forward.png";
import ReturntoCart from "../../assets/Images/ReturnToCart.png";
import CommonCart from "./CommonCart";
import axios from "axios";

export default function VerifyCode() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleVerifyOtp = async () => {
    try {
      await axios.post("/verify-otp", { email: "your-email@gmail.com", otp }); // replace 'your-email@gmail.com' with the actual email
      alert("OTP verified successfully");
      navigate("/cart/address-detail"); // navigate to the next page after verification
    } catch (error) {
      alert("Invalid OTP");
    }
  };

  return (
    <>
      <section className="content-detail">
        <div className="container">
          <div className="row">
            <div className="col-md-7 mt-3 mb-5 border-end d-flex flex-column justify-content-between">
              <div>
                <span className="phone-number">Phone Number</span>
                <span>
                  <img
                    src={forwardIcon}
                    className="ms-2 me-2"
                    alt="forwardIcon"
                  />
                </span>
                <span>Address</span>
                <span>
                  <img
                    src={forwardIcon}
                    className="ms-2 me-2"
                    alt="forwardIcon"
                  />
                </span>
                <span>Payment</span>

                <div className="mb-3 mt-5 content-input">
                  <label htmlFor="otpInput" className="form-label mb-2">
                    Verify Email Address
                  </label>
                  <p className="digit-code">
                    Enter 6-digit code sent to your email{" "}
                    <span style={{ color: "#005BD3" }}>Change</span>
                  </p>
                  <input
                    type="text"
                    className="form-control p-3"
                    id="otpInput"
                    placeholder="Verification Code"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                  <div className="text-end mt-3 me-3 resend-code">
                    <span>
                      Don’t see a code?{" "}
                      <span style={{ color: "#005BD3" }}>Resend Code</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-auto d-flex justify-content-between me-4 countine-res">
                <div className="return">
                  <Link to="/cart/content-detail" className="ReturntoCart">
                    <span className="me-2">
                      <img src={ReturntoCart} alt="ReturntoCart" />
                    </span>
                    Return to Cart
                  </Link>
                </div>
                <div>
                  <button
                    className="btn btn-dark"
                    style={{ padding: "7px 31px" }}
                    onClick={handleVerifyOtp}
                    disabled={!otp}
                  >
                    Continue
                  </button>
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
  );
}
