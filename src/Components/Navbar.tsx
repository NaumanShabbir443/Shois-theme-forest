// Navbar.scss
import "../Scss/_Navbar.scss"
// Import all photo
import staric from "../assets/Images/staric.png"
import search from "../assets/Images/search.png"
import cart from "../assets/Images/cart.png"
import person from "../assets/Images/person.png"
import { Link } from "react-router-dom"


export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <img className="star" src={staric} alt="staric logo is found" />
          <a className="navbar-brand fs-2 fw-medium" href="#">Shois</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">On Sale</a>
              </li>
              <li className="nav-item">
                <Link to="new-arrivals" className="nav-link active">New Arrivals</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Brands</a>
              </li>

            </ul>
          </div>
          <form className="d-flex" role="search">
            <div className="position-relative">
              <img src={search} alt="search icon" className="position-absolute top-50 start-0 translate-middle-y ms-2" />
              <input className="form-control me-2 rounded-5 pl-5" type="search" placeholder="Search for Product" aria-label="Search" style={{ paddingLeft: '2.5rem' }} />
            </div>
          </form>
          <img src={cart} className="cart" alt="cart is not found" />
          <img src={person} alt="cart is not found" />
        </div>
      </nav>
    </>
  )
}
