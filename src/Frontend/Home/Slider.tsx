import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import shoes from "../../assets/Images/shoes.png";
import like from "../../assets/Images/solar_heart-outline.png";
import plus from "../../assets/Images/plus.png";
import RightArrow from "../../assets/Images/right-arrow.png";
import LiftArrow from "../../assets/Images/left-arrow.png";

import { Rating } from 'react-simple-star-rating';
import { Link } from "react-router-dom";

export default function CustomSlider() {
  const [rating, setRating] = useState(0);
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    // Retrieve rating from local storage when the component mounts
    const storedRating = localStorage.getItem('rating');
    if (storedRating) {
      setRating(Number(storedRating));
    }
  }, []);

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);
    // Store rating in local storage
    localStorage.setItem('rating', String(rate));
  };

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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const nextSlide = () => {
    sliderRef.current?.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current?.slickPrev();
  };
  return (
    <>
      {/* Slider Section */}
      <section className="arrivals">
        <div className="container">
          <div className="row">
            <div className="d-flex justify-content-between">
              <div><p className="new-arrivals">NEW ARRIVALS</p></div>
              <div>
                <span className="see-more">See more</span>
                <span className="border-custom me-2 ms-3" onClick={prevSlide}><img src={LiftArrow} alt="LiftArrow is not found" /></span>
                <span className=" border-custom" onClick={nextSlide}><img src={RightArrow} alt="RightArrow is not found" /></span>
              </div>
            </div>
            <div className="slider-container">
              <Slider ref={sliderRef} {...settings}>
                <div className="card border-0" >
                  <div className="position-relative">
                    <div className="like-icon position-absolute top-0 end-0 p-3">
                      <img src={like} alt="like icon is not found " />
                    </div>
                    <div className="plus-button position-absolute bottom-0 end-0 p-3">
                      <img src={plus} alt="like icon is not found " />
                    </div>
                    <img src={shoes} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <div className='App'>
                      <Rating
                        onClick={handleRating}
                        initialValue={rating} />
                      <span>4.5/5</span>
                    </div>
                    <Link to="/product-details" className="card-title">Air Jordan 1 Final Taxi</Link>
                    <p className="card-text">Step into unparalleled comfort and style with our Classic Comfort Sneakers. Step into unparalleled comfort and style with our Classic Comfort Sneakers.</p>
                    <span className="card-price">€120</span>
                  </div>
                </div>
                <div className="card border-0">
                  <div className="position-relative">
                    <div className="like-icon position-absolute top-0 end-0 p-3">
                      <img src={like} alt="like icon is not found " />
                    </div>
                    <div className="plus-button position-absolute bottom-0 end-0 p-3">
                      <img src={plus} alt="like icon is not found " />
                    </div>
                    <img src={shoes} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <div className='App'>
                      <Rating
                        onClick={handleRating}
                        initialValue={rating}
                      />
                      <span>4.5/5</span>
                    </div>
                    <p className="card-title">Air Jordan 1 Final Taxi</p>
                    <p className="card-text">Step into unparalleled comfort and style with our Classic Comfort Sneakers. Step into unparalleled comfort and style with our Classic Comfort Sneakers.</p>
                    <span className="card-price">€120</span>
                  </div>
                </div>
                <div className="card border-0">
                  <div className="position-relative">
                    <div className="like-icon position-absolute top-0 end-0 p-3">
                      <img src={like} alt="like icon is not found " />
                    </div>
                    <div className="plus-button position-absolute bottom-0 end-0 p-3">
                      <img src={plus} alt="like icon is not found " />
                    </div>
                    <img src={shoes} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <div className='App'>
                      <Rating
                        onClick={handleRating}
                        initialValue={rating}
                      />
                      <span>4.5/5</span>
                    </div>
                    <p className="card-title">Air Jordan 1 Final Taxi</p>
                    <p className="card-text">Step into unparalleled comfort and style with our Classic Comfort Sneakers. Step into unparalleled comfort and style with our Classic Comfort Sneakers.</p>
                    <span className="card-price">€120</span>
                  </div>
                </div>
                <div className="card border-0">
                  <div className="position-relative">
                    <div className="like-icon position-absolute top-0 end-0 p-3">
                      <img src={like} alt="like icon is not found " />
                    </div>
                    <div className="plus-button position-absolute bottom-0 end-0 p-3">
                      <img src={plus} alt="like icon is not found " />
                    </div>
                    <img src={shoes} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <div className='App'>
                      <Rating
                        onClick={handleRating}
                        initialValue={rating}
                      />
                      <span>4.5/5</span>
                    </div>
                    <p className="card-title">Air Jordan 1 Final Taxi</p>
                    <p className="card-text">Step into unparalleled comfort and style with our Classic Comfort Sneakers. Step into unparalleled comfort and style with our Classic Comfort Sneakers.</p>
                    <span className="card-price">€120</span>
                  </div>
                </div>
                <div className="card border-0">
                  <div className="position-relative">
                    <div className="like-icon position-absolute top-0 end-0 p-3">
                      <img src={like} alt="like icon is not found " />
                    </div>
                    <div className="plus-button position-absolute bottom-0 end-0 p-3">
                      <img src={plus} alt="like icon is not found " />
                    </div>
                    <img src={shoes} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <div className='App'>
                      <Rating
                        onClick={handleRating}
                        initialValue={rating}
                      />
                      <span>4.5/5</span>
                    </div>
                    <p className="card-title">Air Jordan 1 Final Taxi</p>
                    <p className="card-text">Step into unparalleled comfort and style with our Classic Comfort Sneakers. Step into unparalleled comfort and style with our Classic Comfort Sneakers.</p>
                    <span className="card-price">€120</span>
                  </div>
                </div>
                <div className="card border-0">
                  <div className="position-relative">
                    <div className="like-icon position-absolute top-0 end-0 p-3">
                      <img src={like} alt="like icon is not found " />
                    </div>
                    <div className="plus-button position-absolute bottom-0 end-0 p-3">
                      <img src={plus} alt="like icon is not found " />
                    </div>
                    <img src={shoes} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <div className='App'>
                      <Rating
                        onClick={handleRating}
                        initialValue={rating}
                      />
                      <span>4.5/5</span>
                    </div>
                    <p className="card-title">Air Jordan 1 Final Taxi</p>
                    <p className="card-text">Step into unparalleled comfort and style with our Classic Comfort Sneakers. Step into unparalleled comfort and style with our Classic Comfort Sneakers.</p>
                    <span className="card-price">€120</span>
                  </div>
                </div>
                <div className="card border-0">
                  <div className="position-relative">
                    <div className="like-icon position-absolute top-0 end-0 p-3">
                      <img src={like} alt="like icon is not found " />
                    </div>
                    <div className="plus-button position-absolute bottom-0 end-0 p-3">
                      <img src={plus} alt="like icon is not found " />
                    </div>
                    <img src={shoes} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <div className='App'>
                      <Rating
                        onClick={handleRating}
                        initialValue={rating}
                      />
                      <span>4.5/5</span>
                    </div>
                    <p className="card-title">Air Jordan 1 Final Taxi</p>
                    <p className="card-text">Step into unparalleled comfort and style with our Classic Comfort Sneakers. Step into unparalleled comfort and style with our Classic Comfort Sneakers.</p>
                    <span className="card-price">€120</span>
                  </div>
                </div>
                <div className="card border-0">
                  <div className="position-relative">
                    <div className="like-icon position-absolute top-0 end-0 p-3">
                      <img src={like} alt="like icon is not found " />
                    </div>
                    <div className="plus-button position-absolute bottom-0 end-0 p-3">
                      <img src={plus} alt="like icon is not found " />
                    </div>
                    <img src={shoes} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <div className='App'>
                      <Rating
                        onClick={handleRating}
                        initialValue={rating}
                      />
                      <span>4.5/5</span>
                    </div>
                    <p className="card-title">Air Jordan 1 Final Taxi</p>
                    <p className="card-text">Step into unparalleled comfort and style with our Classic Comfort Sneakers. Step into unparalleled comfort and style with our Classic Comfort Sneakers.</p>
                    <span className="card-price">€120</span>
                  </div>
                </div>
                <div className="card border-0">
                  <div className="position-relative">
                    <div className="like-icon position-absolute top-0 end-0 p-3">
                      <img src={like} alt="like icon is not found " />
                    </div>
                    <div className="plus-button position-absolute bottom-0 end-0 p-3">
                      <img src={plus} alt="like icon is not found " />
                    </div>
                    <img src={shoes} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <div className='App'>
                      <Rating
                        onClick={handleRating}
                        initialValue={rating}
                      />
                      <span>4.5/5</span>
                    </div>
                    <p className="card-title">Air Jordan 1 Final Taxi</p>
                    <p className="card-text">Step into unparalleled comfort and style with our Classic Comfort Sneakers. Step into unparalleled comfort and style with our Classic Comfort Sneakers.</p>
                    <span className="card-price">€120</span>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
