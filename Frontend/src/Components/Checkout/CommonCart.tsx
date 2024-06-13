import { Card } from "react-bootstrap";
// import cartOne from "../../assets/Images/cart-one.png";

import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { ProductItem } from "../../types";

const SHIPPING_COST = 200;
export default function CommonCart() {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // calculating subtotal and total using reduce method
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const total = subtotal + SHIPPING_COST;

  return (
    <div>
      {/* Second Part */}
      <div className="side-bar mt-4">
        {cartItems.map((item: ProductItem) => {
          return (
            <Card className="border-top-0">
              <Card.Body className="d-flex align-items-center justify-content-between card-responsive">
                <div className="me-md-2 mb-3 mb-md-0 position-relative">
                  <img src={item.image} alt={item.name} />
                  {/* <img src={cartOne} alt="cartOne" /> */}
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                    9<span className="visually-hidden">unread messages</span>
                  </span>
                </div>
                <div className="text-center text-md-start">
                  <p className="mb-0 cart-title">{item.name}</p>
                  <p className="shoe-color">Yellow / Medium</p>
                </div>
                <div className="ms-md-3 mt-3 mt-md-0 text-center text-md-end">
                  <p className="cart-price">Rs. {item.price}</p>
                </div>
              </Card.Body>
            </Card>
          );
        })}
        {/* <Card className="border-top-0">
          <Card.Body className="d-flex align-items-center justify-content-between card-responsive">
            <div className="me-md-2 mb-3 mb-md-0 position-relative">
              <img src={cartOne} alt="cartOne" />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                9<span className="visually-hidden">unread messages</span>
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
                9<span className="visually-hidden">unread messages</span>
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
                9<span className="visually-hidden">unread messages</span>
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
        </Card> */}

        {/* Cart End Calculation */}
        <section className="cart-end border-top">
          <div className="d-flex justify-content-between">
            <div>
              <p className="cart-subTotal">Subtotal</p>
            </div>
            <div>
              <p className="cart-subTotal">Rs. {subtotal}</p>
            </div>
          </div>
          <div className="d-flex justify-content-between border-bottom ">
            <div>
              <p className="cart-subTotal">Shipping</p>
            </div>
            <div>
              <p className="cart-subTotal">Rs. {SHIPPING_COST}</p>
            </div>
          </div>

          <div className="d-flex justify-content-between mt-4 ">
            <div>
              <p className="cart-Total">Total</p>
            </div>
            <div>
              <p className="cart-Total">Rs. {total}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
