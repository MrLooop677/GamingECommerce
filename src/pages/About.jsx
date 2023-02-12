import { Footer } from "../components/Footer";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper";

// Images
import rightImg from "./Assets/Images/abouts1.png"
import LeftImg from "./Assets/Images/abouts2.png"

// Slider
import sliderImg1 from "./Assets/Images/Partners/logo-toysforbob.png"
import sliderImg2 from "./Assets/Images/Partners/logo_atvi-shanghai-studio.png"
import sliderImg3 from "./Assets/Images/Partners/logo_beenox.png"
import sliderImg4 from "./Assets/Images/Partners/logo_demonware.png"
import sliderImg5 from "./Assets/Images/Partners/logo_highmoon-studios.png"
import sliderImg6 from "./Assets/Images/Partners/logo_infinityward.png"
import sliderImg7 from "./Assets/Images/Partners/logo_raven.png"
import sliderImg8 from "./Assets/Images/Partners/logo_sledgehammer.png"
import sliderImg9 from "./Assets/Images/Partners/logo_treyarch.png"

// Icons
import { FaArrowRight } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaBroadcastTower } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";

export default function About() {
  return(
      <>
            {/* <!-- Start About Us Page --> */}
    <section className="about-us pt-5 body-img">
        <div className="about-us__contents">
            {/* <!-- Intro Section --> */}
            <div className="container">
                <div className="row about-us__content mt-5">
                    <div className="col-lg-6 about-us__identity d-flex flex-column justify-content-center ps-5">
                        <h2>Join Our Community</h2>
                        <p>Meet new people, join groups, form clans, chat in-game and more! With over 100 million potential friends (or enemies), the fun never stops.</p>
                        <a href="./Community" className="d-flex arrow-link align-items-center ">Visit the community <FaArrowRight className="ms-2" /></a>
                    </div>
                    <div className="col-lg-6 about-us__page text-center">
                        <img className="w-50" src= {rightImg} width="100%" alt=""/>
                    </div>
                </div>
                <div className="row about-us__content mt-5">
                    <div className="col-lg-6 about-us__identity d-flex flex-column justify-content-center order-lg-2 ps-5">
                        <h2>Experience Dimensions Hardware</h2>
                        <p>We created the Dimensions Controller and the VR technologies that power the Controller to making gaming on the PC even better.</p>
                        <a href="./" className="d-flex arrow-link align-items-center ">Experience Dimensions Hardware <FaArrowRight className="ms-2"/></a>
                    </div>
                    <div className="col-lg-6 about-us__page text-center">
                        <img className="w-50" src={LeftImg} alt=""/>
                    </div>
                </div>
            </div>
            {/* <!-- Intro Section --> */}

            {/* <!-- Features --> */}
            <section className="about-us__features my-5">
                <div className="container">
                    <div className="features__desc d-flex flex-column align-items-center mb-5 pb-3">
                        <h2 className="main-title">Our Features</h2>
                        <p className="text-center w-91">We are constantly working to bring new updates and features to Steam, such as:</p>
                    </div>
                    <div className="row about-us__features mt-lg-5">
                        <div className="features__card col-lg-4 d-flex flex-column align-items-center text-center mt-5">
                            <div className="card__desc">
                                <div className="icon"><FaArrowRight/></div>
                                <h4 className="my-3">Our Chat App</h4>
                                <p>Talk with friends or groups via text or voice without leaving Steam. Videos, Tweets, GIFs and more are supported; use wisely.</p>
                                <a href="#" className="link-more">Learn More <FaArrowRight/> </a>
                            </div>
                        </div>
                        <div className="features__card col-lg-4  d-flex flex-column align-items-center text-center mt-5">
                            <div className="card__desc">
                                <div className="icon"><FaUsers/></div>
                                <h4 className="my-3">Game Hubs</h4>
                                <p>Everything about your game, all in one place. Join discussions, upload content, and be the first to know about new updates.</p>
                                <a href="#" className="link-more">Learn More <FaArrowRight/></a>
                            </div>
                        </div>
                        <div className="features__card col-lg-4  d-flex flex-column align-items-center text-center mt-5">
                            <div className="card__desc">
                                <div className="icon"><FaBroadcastTower/></div>
                                <h4 className="my-3">Our Broadcast</h4>
                                <p>Stream your gameplay live with the click of a button, and share your game with friends or the rest of the community.</p>
                                <a href="#" className="link-more">Learn More <FaArrowRight/></a>
                            </div>
                        </div>
                    </div>
                    <div className="row about-us__features mt-lg-5">
                        <div className="features__card col-lg-4  d-flex flex-column align-items-center text-center mt-5">
                            <div className="card__desc">
                                <div className="icon"><FaShareAlt/></div>
                                <h4 className="my-3">Our Workshop</h4>
                                <p>Create, discover, and download player-created mods and cosmetics for nearly 1,000 supported games.</p>
                                <a href="#" className="link-more">Learn More <FaArrowRight/></a>
                            </div>
                        </div>
                        <div className="features__card col-lg-4  d-flex flex-column align-items-center text-center mt-5">
                            <div className="card__desc">
                                <div className="icon"><FaMobileAlt/></div>
                                <h4 className="my-3">Available on Mobile</h4>
                                <p>Access Steam anywhere from your iOS or Android device with the Steam mobile app.</p>
                                <a href="#" className="link-more">Learn More <FaArrowRight/></a>
                            </div>
                        </div>
                        <div className="features__card col-lg-4  d-flex flex-column align-items-center text-center mt-5">
                                <div className="card__desc">
                                <div className="icon"><FaRegClock/></div>
                                <h4 className="my-3">Early Access to Games</h4>
                                <p>Discover, play, and get involved with games as they evolve. Be the first to see what's coming and become part of the process.</p>
                                <a href="#" className="link-more">Learn More <FaArrowRight/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Features --> */}

            {/* <!-- Slider --> */}
            <section className="slider-sec py-5">
                <div className="container">
                    <div className="title mb-5 pt-3">
                        <h2 className="main-title">Our Partner</h2>
                    </div>
                    <Swiper
                        slidesPerView={4}
                        loop={true}
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="aboutPartner"
                    >
                        <SwiperSlide> <div className="slider__image w-75"><img src={sliderImg1} alt="" /></div>  </SwiperSlide>
                        <SwiperSlide> <div className="slider__image w-75"><img src={sliderImg2} alt="" /></div>  </SwiperSlide>
                        <SwiperSlide> <div className="slider__image w-75"><img src={sliderImg3} alt="" /></div>  </SwiperSlide>
                        <SwiperSlide> <div className="slider__image w-75"><img src={sliderImg4} alt="" /></div>  </SwiperSlide>
                        <SwiperSlide> <div className="slider__image w-75"><img src={sliderImg5} alt="" /></div>  </SwiperSlide>
                        <SwiperSlide> <div className="slider__image w-75"><img src={sliderImg6} alt="" /></div>  </SwiperSlide>
                        <SwiperSlide> <div className="slider__image w-75"><img src={sliderImg7} alt="" /></div>  </SwiperSlide>
                        <SwiperSlide> <div className="slider__image w-75"><img src={sliderImg8} alt="" /></div>  </SwiperSlide>
                        <SwiperSlide> <div className="slider__image w-75"><img src={sliderImg9} alt="" /></div>  </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            {/* <!-- Slider --> */}
        </div>
    </section>
    {/* <!-- End About Us Page --> */}
    <Footer/>
      </>
    ) 
};
