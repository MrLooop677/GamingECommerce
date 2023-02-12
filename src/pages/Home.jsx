import { Footer } from "../components/Footer";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import CounterDown from "../components/CounterDown"

// Images
import sliderImg from "./Assets/Images/Slider/main-home-rev-1.jpg"
import sliderImg2 from "./Assets/Images/Slider/main-home-rev-2.jpg"
import sliderImg3 from "./Assets/Images/Slider/main-home-rev-3.jpg"
import cdImg from "./Assets/Images/cd-img.png"
import arrow from "./Assets/Images/inner-img-1.png"

// Video 
import video from "./Assets/Images/XiaoYing_Video_1663854199515.mp4"


export default function Home() {

  const videoEl = useRef(null);
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        alert('error')
      });
  };
  
  useEffect(() => {
    attemptPlay();
  }, []);


  return (
    <>
    {/* <!-- Start Swiper Section --> */}
    <Swiper navigation={true}
        modules={[Navigation, Autoplay]} 
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }} 
        loop={true} 
        className="landingSwiper">
        <SwiperSlide>
          <div className="slider-img animate-img">
                    <img src={sliderImg} alt=""/>
                </div>
                <div className="overlay"></div>
                <div className="slider__content d-flex justify-content-center align-items-center flex-column">
                    <h2>Take Your Breath</h2>
                    <div className="underline my-4">
                        <img src={arrow} alt=""/>
                    </div>
                    <div className="slider__paragraph animate-text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque incidunt qui quae ex voluptatem porro aliquid fuga sit quia ea.</p>
                    </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slider-img animate-img">
                  <img src={sliderImg2} alt=""/>
              </div>
              <div className="overlay"></div>
              <div className="slider__content d-flex justify-content-center align-items-center flex-column">
                  <h2>Get Ready To</h2>
                  <div className="underline my-4">
                      <img src={arrow} alt=""/>
                  </div>
                  <div className="slider__paragraph animate-text">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque incidunt qui quae ex voluptatem porro aliquid fuga sit quia ea.</p>
                  </div>
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slider-img animate-img">
                  <img src={sliderImg3} alt=""/>
              </div>
              <div className="overlay"></div>
              <div className="slider__content d-flex justify-content-center align-items-center flex-column">
                  <h2>The Another Dimensions</h2>
                  <div className="underline my-4">
                      <img src={arrow} alt=""/>
                  </div>
                  <div className="slider__paragraph animate-text">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque incidunt qui quae ex voluptatem porro aliquid fuga sit quia ea.</p>
                  </div>
              </div>
        </SwiperSlide>
    </Swiper>
    {/* <!-- End Swiper Section --> */}

    {/* <!-- Start Intro-Web Section --> */}
    <section className="intro">
        <div className="custom-container">
            <div className="intro__contents text-center text-light">
                <h4>Welcome To The Another Dimensions</h4>
                <h2>One of the best 'Souls-like' launcher games</h2>
                <div className="inner-line mb-3">
                    <img src={arrow} alt=""/>
                </div>
                <p>There is in the land of Mnar a vast still lake that is fed by no stream and out of which no stream flows. Ten thousand years ago there stood by its shore the mighty city of Sarnath, but Sarnath stands there no more.</p>
                <a href="Assets/Images/download-img.jpg" download="" className="primary-btn">
                    Download Launcher
                </a>
            </div>
        </div>
    </section>
    {/* <!-- End Intro-Web Section --> */}
    
    {/* <!-- Start Video Section --> */}
    <section className="video bx-shadow"
    >
        <video playsInline
          loop
          muted
          alt="All the devices" 
          ref={videoEl}
          className="video-iframe" 
          width="100%">
            <source type="video/mp4" src={video}/>
        </video>
    </section>
    {/* <!-- End Video Section --> */}

    {/* <!-- Start Games Section --> */}
    <section className="games">
      {/* PreOrder */}
      <section className="pre-order">
        <div className="pre-order__contents py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="image">
                  <img src={cdImg} alt="" />
                </div>
              </div>
              <div className="col-lg-6 d-flex text-lg-start text-sm-center pre-order__descr justify-content-center align-items-center">
                <div className="pre-order__desc">
                  <h2 className="main-title text-sm-center text-lg-start">
                    Pre-Order Now!!
                  </h2>
                  <p className="my-5">
                    Elden Ring is a 2022 action role-playing game developed by
                    FromSoftware and published by Bandai Namco Entertainment.
                    It was directed by Hidetaka Miyazaki with worldbuilding
                    provided by the fantasy writer George R. R. Martin. The
                    game was released for PlayStation 4, PlayStation 5,
                    Windows, Xbox One, and Xbox Series X/S on February 25. In
                    Elden Ring, players control a customizable player
                    character on a journey to repair the Elden Ring and become
                    the new Elden Lord. The game is presented through a
                    third-person perspective, with players freely roaming its
                    interactive open world. Gameplay elements include combat
                    using several types of weapons and magic spells, horseback
                    riding, and crafting.
                  </p>
                  <a href="Shop.html" className="primary-btn pre-order__btn">
                    Pre-Order Now!!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* PreOrder */}
                    
    </section>
    {/* <!-- End Games Section --> */}

    {/* <!-- Start Coming-Soon Section --> */}
      <CounterDown />
    {/* <!-- End Coming-Soon Section --> */}

    {/* <!-- Start NewsLetter Section --> */}
    <section className="newsletter">
        <div className="news__contents">
            <div className="container h-100">
                <div className="news__content d-flex justify-content-center align-items-center flex-column h-100">
                    <h5>Subscribe To Our Newsletter</h5>
                    <h2 className="main-text">AND KEEP UP TO DATE</h2>
                    <div className="image">
                        <img src="Assets/Images/inner-img-1.png" alt=""/>
                    </div>
                    <div className="email-input">
                        <input type="email" className="custom--input" name="" id="" placeholder="Your Email"/>
                        <button className="primary-btn--non-bg">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- End NewsLetter Section --> */}
    
    <Footer/>
    </>
  );
}
