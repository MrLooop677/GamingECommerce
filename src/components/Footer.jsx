import { useSelector } from "react-redux";
// images
import logo from "../pages/Assets/Images/foooter-logo.png"
import art from "../pages/Assets/Images/Art Footer/art-footer.jpg"
import art2 from "../pages/Assets/Images/Art Footer/art-footer2.jpg"
import art3 from "../pages/Assets/Images/Art Footer/art-footer3.jpg"
import art4 from "../pages/Assets/Images/Art Footer/art-footer4.jpg"
import art5 from "../pages/Assets/Images/Art Footer/art-footer5.jpg"
import art6 from "../pages/Assets/Images/Art Footer/art-footer6.jpg"

// Icons
import { FaSearch } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export function Footer() {
  const { postsUpload } = useSelector((state) => state.postSlice);

  const latestPosts = postsUpload.slice(
    postsUpload.length - 2,
    postsUpload.length
  );
  const result = latestPosts.map((post) => (
    <div className="news__content d-flex" key={post.id}>
      <div className="image">
        <img src={post.mainImg} alt="" />
      </div>
      <div className="news-desc">
        <h4>{post.userName}</h4>
        <p>June 7,2017</p>
      </div>
    </div>
  ));
  return (
    <>
      <footer className="footer">
        <div className="footer__contents">
          <div className="footer__container py-5">
            <div className="footer__content">
              <div className="row">
                <div className="col-lg-3 mt--custom">
                  <div className="footer__logo">
                    <a href="index.html">
                      <img src={logo} alt="" />
                    </a>
                  </div>
                  <div className="footer__desc">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Nihil eos atque maxime.
                    </p>
                  </div>
                  <div className="footer__search">
                    <input type="search" placeholder="Search" />
                    <a href="#">
                      <FaSearch />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 mt--custom">
                  <h4>LATEST NEWS</h4>
                  {result}
                </div>
                <div className="col-lg-3 mt--custom">
                  <div className="art-work row">
                    <h3>Art Works</h3>
                    <div className="col-4">
                      <img
                        src={art}
                        alt=""
                        srcSet=""
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src={art2}
                        alt=""
                        srcSet=""
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src={art3}
                        alt=""
                        srcSet=""
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src={art4}
                        alt=""
                        srcSet=""
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src={art5}
                        alt=""
                        srcSet=""
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src={art6}
                        alt=""
                        srcSet=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mt--custom">
                  <div className="news-letter">
                    <h3>News Letter</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Necessitatibus, odio.
                    </p>
                    <input type="text" placeholder="Subscripe" />
                    <a href="#">
                      <FaRegCommentAlt />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="second__footer pt-3">
          <div className="footer__container">
            <div className="row">
              <div className="col-lg-6">
                <p>
                  © <span className="dateTime text-white"></span>{" "}
                  AhmedAbdElNasser, All Rights Reserved
                </p>
              </div>
              <div className="col-lg-6">
                <ul className="icons-social d-flex justify-content-end">
                  <li className="icon-social">
                    <a
                      href="https://www.facebook.com/AhmedNasser42/"
                      target="_blank"
                    >
                      <FaFacebookF />
                    </a>
                  </li>
                  <li className="icon-social">
                    <a href="#">
                    <FaWhatsapp />
                    </a>
                  </li>
                  <li className="icon-social">
                    <a href="#">
                    <FaInstagram />
                    </a>
                  </li>
                  <li className="icon-social">
                    <a href="#">
                    <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="icon-social">
                    <a href="#">
                    <FaTwitter />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
