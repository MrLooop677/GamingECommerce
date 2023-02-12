import React, { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../RTK/productSlice";
import { addToCart } from "../RTK/cartSlice";
import { Link } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

// Shop Slider Image Import
import logo from "./Assets/Images/Shop/shop-slider.png";
import logoSec from "./Assets/Images/Shop/shop-slider2.png";
import logoThird from "./Assets/Images/Shop/shop-slider3.png";
import logoForth from "./Assets/Images/Shop/shop-slider4.png";
import logoFifth from "./Assets/Images/Shop/shop-slider5.png";

const Shop = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productSlice);
  const [searchInp, setSearchInp] = useState("");
  const [result, setResult] = useState([]);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const filterProductPrice = async (min, max) => {
    dispatch(fetchData(`price_gte=${min}&price_lte=${max}`));
  };

  const filterCategory = async (category) => {
    dispatch(fetchData(`category=${category}`));
  };
  const filterAllData = async () => {
    dispatch(fetchData());
  };

  useEffect(() => {
    // const Search = async () => {
    //   dispatch(fetchData(`name=${searchInp}`));
    //   setResult(...products);
    // };

    if (!result.length && !searchInp) {
      dispatch(fetchData());
    } else if (searchInp) {
      const debounceSearch = setTimeout(() => {
        if (searchInp) {
          dispatch(fetchData(`name=${searchInp}`));
        }
      }, 2000);

      return () => {
        clearTimeout(debounceSearch);
      };
    }
  }, [searchInp, result.length]);

  const card = products.map((product) => (
    <div className="col-lg-4 mb-3 mt-4" key={product.id}>
      <div className="shop-card" id="price_30">
        <div className="shop-card__image position-relative">
          <img src={product.mainImg} alt="" />
          <div className="add-cart">
            <button
              className="add-to-cart primary-btn"
              onClick={() => dispatch(addToCart(product))}
            >
              Add To Cart
            </button>
          </div>
          <div className="overlay shop-overlay"></div>
        </div>
        <div className="shop-card__desc">
          <div className="row align-items-center mt-3">
            <div className="col-6">
              <div className="card__name">
                <h3>
                  <Link to={`/ProductDetails/${product.id}`}>{product.name}</Link>
                </h3>
              </div>
            </div>
            <div className="col-6">
              <div className="card__price text-end">
                <h5>${product.price}</h5>
              </div>
            </div>
            <div className="col-12">
              <span className="card__type">Category / {product.category}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      {/* <!-- Start Shop Pgae --> */}
      <section className="shop mt-5 pt-5">
        <div className="shop__contents">
          <div className="container">
            <div className="shop__content">
              <div className="shop__slider">
                <div className="swiper shopSlider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="shop__image">
                        <img src="" alt="" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="shop__image">
                        <img src="Assets/Images/Shop/shop-slider2.png" alt="" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="shop__image">
                        <img src="Assets/Images/Shop/shop-slider3.png" alt="" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="shop__image">
                        <img src="Assets/Images/Shop/shop-slider4.png" alt="" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="shop__image">
                        <img src="Assets/Images/Shop/shop-slider5.png" alt="" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="shop__image">
                        <img src="Assets/Images/Shop/shop-slider.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination shopPagi"></div>
                </div>
              </div>
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                loop={true}
              >
                <SwiperSlide>
                  <img src={logo} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={logoSec} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={logoThird} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={logoForth} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={logoFifth} alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="row">
                <div className="col-lg 9">
                  <div className="shop__contents__cards">
                    <div className="row mt-5">{card}</div>
                  </div>
                </div>

                <div className="col-lg-3 mt-5">
                  <div className="blog__left-side-bar mt-3">
                    <div className="side-bar__search">
                      <h2>Shop Search</h2>
                      <div className="input-search">
                        <input
                          type="search"
                          placeholder="Search"
                          name=""
                          id=""
                          value={searchInp}
                          onChange={(e) => setSearchInp(e.target.value)}
                        />
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </div>
                    </div>
                    <div className="side-bar__article filter-price mt-5">
                      <h2>Fliter Price</h2>
                      <div className="filter">
                        <input
                          id="All"
                          type="radio"
                          className="price"
                          label=""
                          name="price"
                          onClick={(e) => filterAllData()}
                        />
                        <label htmlFor="All" onClick={(e) => filterAllData()}>
                          All
                        </label>
                      </div>
                      <div className="filter">
                        <input
                          id="30"
                          type="radio"
                          className="price"
                          label=""
                          name="price"
                          onClick={(e) => filterProductPrice(30, 50)}
                        />
                        <label
                          htmlFor="30"
                          onClick={(e) => filterProductPrice(30, 50)}
                        >
                          from 30 -50
                        </label>
                      </div>
                      <div className="filter">
                        <input
                          id="60"
                          type="radio"
                          className="price"
                          name="price"
                          onClick={(e) => filterProductPrice(60, 80)}
                        />
                        <label
                          htmlFor="60"
                          onClick={(e) => filterProductPrice(60, 80)}
                        >
                          from 60 -80
                        </label>
                      </div>
                      <div className="filter">
                        <input
                          id="90"
                          type="radio"
                          className="price"
                          name="price"
                          onClick={(e) => filterProductPrice(90, 100)}
                        />
                        <label
                          htmlFor="90"
                          onClick={(e) => filterProductPrice(90, 100)}
                        >
                          from 90 -100
                        </label>
                      </div>
                      <div className="filter">
                        <input
                          id="110"
                          type="radio"
                          className="price"
                          name="price"
                          onClick={(e) => filterProductPrice(110, 130)}
                        />
                        <label
                          htmlFor="110"
                          onClick={(e) => filterProductPrice(110, 130)}
                        >
                          from 110 -130
                        </label>
                      </div>
                      <div className="filter">
                        <input
                          id="150"
                          type="radio"
                          className="price"
                          name="price"
                          onClick={(e) => filterProductPrice(150, Date.now)}
                        />
                        <label
                          htmlFor="150"
                          onClick={(e) => filterProductPrice(150, 500)}
                        >
                          more than 150
                        </label>
                      </div>
                    </div>
                    <div className="side-bar__categories my-5">
                      <h2>Categories</h2>
                      <h4>
                        <button onClick={(e) => filterAllData()}>
                          All Categories
                        </button>
                      </h4>
                      <h4>
                        <button onClick={(e) => filterCategory("cd-games")}>
                          Cd Games
                        </button>
                      </h4>
                      <h4>
                        <button onClick={(e) => filterCategory("clothes")}>
                          Clothes
                        </button>
                      </h4>
                      <h4>
                        <button onClick={(e) => filterCategory("electronics")}>
                          Electronics
                        </button>
                      </h4>
                      <h4>
                        <button onClick={(e) => filterCategory("access")}>
                          Accessories
                        </button>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Shop Pgae --> */}

      <Footer />
    </>
  );
};

export default Shop;
