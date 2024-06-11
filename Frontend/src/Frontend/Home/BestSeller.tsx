import Slider from "react-slick";
import shoes from "../../assets/Images/shoes-two.png";
import shoesOne from "../../assets/Images/similar-three.png";
import shoesThree from "../../assets/Images/similar-six.png";
// import plusFive from "../../assets/Images/similar-one.png";
import plus from "../../assets/Images/plus.png";
import RightArrow from "../../assets/Images/right-arrow.png";
import LiftArrow from "../../assets/Images/left-arrow.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { useRef } from "react";

// importing cart slice
import { addToCart } from "../../Store/slices/cartSlice";
import { addToFavorites } from "../../Store/slices/favoriteSlice";
// importing css
import "./BestSeller.css";
import Ratings from "../Custom/Ratings";
import Heart from "../Custom/Heart";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

export default function BestSeller() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state);

  const temp = () => {
    console.log(items);
  };
  // const addToCart = (data: Product) => {
  //   dispatch({
  //     type: "Add",
  //     payload: data,
  //   });
  //   console.log("Card Data", data);
  // };

  const handleDetails = () => {
    window.top?.scrollTo(0, 0);
    Navigate("/product-details");
  };

  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const nextSlide = () => {
    sliderRef.current?.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current?.slickPrev();
  };

  const products: Product[] = [
    { id: 1, name: "Air Jordan 1 Final Taxi", image: shoesOne, price: 120 },
    { id: 2, name: "Air Jordan 1 Final Taxi", image: shoes, price: 120 },
    { id: 3, name: "Air Jordan 1 Final Taxi", image: shoesThree, price: 120 },
    { id: 4, name: "Air Jordan 1 Final Taxi", image: shoes, price: 120 },
  ];

  return (
    <>
      {/* Slider Section */}
      <section className="arrivals">
        <div className="container">
          <div className="row">
            <div className="d-flex justify-content-between">
              <div>
                <p className="new-arrivals">Best Seller</p>
              </div>
              <div>
                <span className="see-more">See more</span>
                <span className="border-custom me-2 ms-3" onClick={prevSlide}>
                  <img src={LiftArrow} alt="LiftArrow is not found" />
                </span>
                <span className=" border-custom" onClick={nextSlide}>
                  <img src={RightArrow} alt="RightArrow is not found" />
                </span>
              </div>
            </div>
            <div className="slider-container">
              <button onClick={temp}>AAAAAA</button>
              <Slider ref={sliderRef} {...settings}>
                {/* <div className="card border-0">
                  <div className="position-relative">
                    <Heart />
                    <div
                      className="plus-button position-absolute bottom-0 end-0 p-3"
                      onClick={(e) => addToCart(e)}
                    >
                      <img src={plus} alt="like icon is not found " />
                    </div>
                    <img
                      src={shoesOne}
                      className="card-img-top"
                      alt="..."
                      onClick={handleDetails}
                    />
                  </div>
                  <div className="card-body">
                    <Ratings />
                    <p className="card-title" onClick={handleDetails}>
                      Air Jordan 1 Final Taxi
                    </p>
                    <p className="card-text">
                      Step into unparalleled comfort and style with our Classic
                      Comfort Sneakers. Step into unparalleled comfort and style
                      with our Classic Comfort Sneakers.
                    </p>
                    <span className="card-price">€120</span>
                  </div>
                </div>
                <div className="card border-0">
                  <div className="position-relative">
                    <Heart />
                    <div className="plus-button position-absolute bottom-0 end-0 p-3">
                      <img src={plus} alt="like icon is not found " />
                    </div>
                    <img
                      src={shoes}
                      className="card-img-top"
                      alt="..."
                      onClick={handleDetails}
                    />
                  </div>
                  <div className="card-body">
                    <Ratings />
                    <p className="card-title" onClick={handleDetails}>
                      Air Jordan 1 Final Taxi
                    </p>
                    <p className="card-text">
                      Step into unparalleled comfort and style with our Classic
                      Comfort Sneakers. Step into unparalleled comfort and style
                      with our Classic Comfort Sneakers.
                    </p>
                    <span className="card-price">€120</span>
                  </div>
                </div>
                <div className="card border-0">
                  <div className="position-relative">
                    <Heart />
                    <div className="plus-button position-absolute bottom-0 end-0 p-3">
                      <img src={plus} alt="like icon is not found " />
                    </div>
                    <img
                      src={shoesThree}
                      className="card-img-top"
                      alt="..."
                      onClick={handleDetails}
                    />
                  </div>
                  <div className="card-body">
                    <Ratings />
                    <p className="card-title" onClick={handleDetails}>
                      Air Jordan 1 Final Taxi
                    </p>
                    <p className="card-text">
                      Step into unparalleled comfort and style with our Classic
                      Comfort Sneakers. Step into unparalleled comfort and style
                      with our Classic Comfort Sneakers.
                    </p>
                    <span className="card-price">€120</span>
                  </div>
                </div>
                <div className="card border-0">
                  <div className="position-relative">
                    <Heart />
                    <div className="plus-button position-absolute bottom-0 end-0 p-3">
                      <img src={plus} alt="like icon is not found " />
                    </div>
                    <img
                      src={shoes}
                      className="card-img-top"
                      alt="..."
                      onClick={handleDetails}
                    />
                  </div>
                  <div className="card-body">
                    <Ratings />
                    <p className="card-title" onClick={handleDetails}>
                      Air Jordan 1 Final Taxi
                    </p>
                    <p className="card-text">
                      Step into unparalleled comfort and style with our Classic
                      Comfort Sneakers. Step into unparalleled comfort and style
                      with our Classic Comfort Sneakers.
                    </p>
                    <span className="card-price">€120</span>
                  </div>
                </div>
                <div className="card border-0">
                  <div className="position-relative">
                    <Heart />
                    <div className="plus-button position-absolute bottom-0 end-0 p-3">
                      <img src={plusFive} alt="like icon is not found " />
                    </div>
                    <img
                      src={shoes}
                      className="card-img-top"
                      alt="..."
                      onClick={handleDetails}
                    />
                  </div>
                  <div className="card-body">
                    <Ratings />
                    <p className="card-title" onClick={handleDetails}>
                      Air Jordan 1 Final Taxi
                    </p>
                    <p className="card-text">
                      Step into unparalleled comfort and style with our Classic
                      Comfort Sneakers. Step into unparalleled comfort and style
                      with our Classic Comfort Sneakers.
                    </p>
                    <span className="card-price">€120</span>
                  </div>
                </div>
                <div className="card border-0">
                  <div className="position-relative">
                    <Heart />
                    <div className="plus-button position-absolute bottom-0 end-0 p-3">
                      <img src={plus} alt="like icon is not found " />
                    </div>
                    <img
                      src={shoes}
                      className="card-img-top"
                      alt="..."
                      onClick={handleDetails}
                    />
                  </div>
                  <div className="card-body">
                    <Ratings />
                    <p className="card-title" onClick={handleDetails}>
                      Air Jordan 1 Final Taxi
                    </p>
                    <p className="card-text">
                      Step into unparalleled comfort and style with our Classic
                      Comfort Sneakers. Step into unparalleled comfort and style
                      with our Classic Comfort Sneakers.
                    </p>
                    <span className="card-price">€120</span>
                  </div>
                </div>
                <div className="card border-0">
                  <div className="position-relative">
                    <Heart />
                    <div className="plus-button position-absolute bottom-0 end-0 p-3">
                      <img src={plus} alt="like icon is not found " />
                    </div>
                    <img
                      src={shoes}
                      className="card-img-top"
                      alt="..."
                      onClick={handleDetails}
                    />
                  </div>
                  <div className="card-body">
                    <Ratings />
                    <p className="card-title" onClick={handleDetails}>
                      Air Jordan 1 Final Taxi
                    </p>
                    <p className="card-text">
                      Step into unparalleled comfort and style with our Classic
                      Comfort Sneakers. Step into unparalleled comfort and style
                      with our Classic Comfort Sneakers.
                    </p>
                    <span className="card-price">€120</span>
                  </div>
                </div>
                <div className="card border-0">
                  <div className="position-relative">
                    <Heart />
                    <div className="plus-button position-absolute bottom-0 end-0 p-3">
                      <img src={plus} alt="like icon is not found " />
                    </div>
                    <img
                      src={shoesThree}
                      className="card-img-top"
                      alt="..."
                      onClick={handleDetails}
                    />
                  </div>
                  <div className="card-body">
                    <Ratings />
                    <p className="card-title" onClick={handleDetails}>
                      Air Jordan 1 Final Taxi
                    </p>
                    <p className="card-text">
                      Step into unparalleled comfort and style with our Classic
                      Comfort Sneakers. Step into unparalleled comfort and style
                      with our Classic Comfort Sneakers.
                    </p>
                    <span className="card-price">€120</span>
                  </div>
                </div>
                <div className="card border-0">
                  <div className="position-relative">
                    <Heart />
                    <div className="plus-button position-absolute bottom-0 end-0 p-3">
                      <img src={plus} alt="like icon is not found " />
                    </div>
                    <img
                      src={shoes}
                      className="card-img-top"
                      alt="..."
                      onClick={handleDetails}
                    />
                  </div>
                  <div className="card-body">
                    <Ratings />
                    <p className="card-title" onClick={handleDetails}>
                      Air Jordan 1 Final Taxi
                    </p>
                    <p className="card-text">
                      Step into unparalleled comfort and style with our Classic
                      Comfort Sneakers. Step into unparalleled comfort and style
                      with our Classic Comfort Sneakers.
                    </p>
                    <span className="card-price">€120</span>
                  </div>
                </div> */}

                {products.map((product) => (
                  <div key={product.id} className="card border-0">
                    <div className="position-relative">
                      <div onClick={() => dispatch(addToFavorites(product))}>
                        <Heart />
                      </div>
                      <div
                        className="plus-button position-absolute bottom-0 end-0 p-3 hover-border"
                        onClick={() => dispatch(addToCart(product))}
                      >
                        <img src={plus} alt="like icon is not found " />
                      </div>
                      <img
                        src={product.image}
                        className="card-img-top"
                        alt="..."
                        onClick={handleDetails}
                      />
                    </div>
                    <div className="card-body">
                      <Ratings />
                      <p className="card-title" onClick={handleDetails}>
                        {product.name}
                      </p>
                      <p className="card-text">
                        Step into unparalleled comfort and style with our
                        Classic Comfort Sneakers.
                      </p>
                      <span className="card-price">€{product.price}</span>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
