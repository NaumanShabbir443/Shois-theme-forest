
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import cart from "../../src/assets/Images/cart.png"
import Offcanvas from 'react-bootstrap/Offcanvas';
import cartOne from '../assets/Images/cart-one.png';
import crossButton from '../assets/Images/crossButton.png';
import decrement from '../assets/Images/cartDecrement.png';
import increment from '../assets/Images/cartIcrement.png';
// scss
import "../Scss/_Offcanvas.scss"
import { Link } from 'react-router-dom';

export default function OffCanvas() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <img src={cart} alt="Menu" onClick={handleShow} style={{ cursor: 'pointer' }} />
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='side-bar'>
            <Card>
              <Card.Body className='d-flex ps-0 pe-0'>
                <div className='me-2'><img src={cartOne} alt="cartOne" /></div>
                <div>
                  <p className='mb-0 cart-title'>One Life Gray Shoes - Men</p>
                  <p className='shoe-color'>Yellow / Medium</p>
                  <span className='d-flex operator'>
                    <span><img src={decrement} className='me-3' alt="decrement" /></span>
                    <p className='mb-0 me-3'>1</p>
                    <span><img src={increment} alt="increment" /></span>
                  </span>
                  <p className='text-end cart-price'>Rs. 5,900</p>
                </div>
                <div className='ms-3'>
                  <img src={crossButton} alt="crossButton" />
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body className='d-flex ps-0 pe-0'>
                <div className='me-2'><img src={cartOne} alt="cartOne" /></div>
                <div>
                  <p className='mb-0 cart-title'>One Life Gray Shoes - Men</p>
                  <p className='shoe-color'>Yellow / Medium</p>
                  <span className='d-flex operator'>
                    <span><img src={decrement} className='me-3' alt="decrement" /></span>
                    <p className='mb-0 me-3'>1</p>
                    <span><img src={increment} alt="increment" /></span>
                  </span>
                  <p className='text-end cart-price'>Rs. 5,900</p>
                </div>
                <div className='ms-3'>
                  <img src={crossButton} alt="crossButton" />
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body className='d-flex ps-0 pe-0'>
                <div className='me-2'><img src={cartOne} alt="cartOne" /></div>
                <div>
                  <p className='mb-0 cart-title'>One Life Gray Shoes - Men</p>
                  <p className='shoe-color'>Yellow / Medium</p>
                  <span className='d-flex operator'>
                    <span><img src={decrement} className='me-3' alt="decrement" /></span>
                    <p className='mb-0 me-3'>1</p>
                    <span><img src={increment} alt="increment" /></span>
                  </span>
                  <p className='text-end cart-price'>Rs. 5,900</p>
                </div>
                <div className='ms-3'>
                  <img src={crossButton} alt="crossButton" />
                </div>
              </Card.Body>
            </Card>
            {/* Cart End Calculation */}
            <section className='cart-end'>
              <div className='d-flex justify-content-between'>
                <div><p className='cart-subTotal'>Subtotal</p></div>
                <div><p className='cart-subTotal'>Rs. 168</p></div>
              </div>
              <div className='d-flex justify-content-between'>
                <div><p className='cart-subTotal'>Shipping</p></div>
                <div><p className='cart-subTotal'>Rs. 200</p></div>
              </div>
              <div className='d-flex justify-content-between border-bottom'>
                <div><p className='cart-subTotal'>VAT</p></div>
                <div><p className='cart-subTotal'>Rs. 10</p></div>
              </div>
              <div className='d-flex justify-content-between mt-4'>
                <div><p className='cart-Total'>Total</p></div>
                <div><p className='cart-Total'>Rs. 16,610</p></div>
              </div>
              <div className="d-grid gap-2 mt-3">
                <Link to="cart/content-detail" className="btn btn-dark" type="button" onClick={handleClose}>Go to Checkout</Link>
              </div>
            </section>
          </div>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
