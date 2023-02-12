import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../pages/Assets/Images/logo.png";
import { checkOut } from "../RTK/authSlice";
const NavbarComponent = () => {
  const { cart } = useSelector((state) => state.cartSlice);

  const dispatch = useDispatch();
  return (
    <>
      <nav id="nav" className="navbar navbar-expand-lg nav-bar abs-nav">
        <div className="nav-phone fixed-nav d-flex d-lg-none  align-items-center">
          <button
            className="btn btn--icon mt-1"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
          ></button>
          <Link
            className="navbar-brand nav--custom-logo text-light text-center pe-3"
            to="/"
          >
            <img src={logo} alt="" />
          </Link>
          <div
            className="offcanvas body--custom bx-shadow offcanvas-start canvas--edit"
            data-bs-scroll="true"
            data-bs-backdrop="false"
            tabIndex="-1"
            id="offcanvasScrolling"
            aria-labelledby="offcanvasScrollingLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-endtext-center">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="">
                    <span>Home</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About">
                    <span>About Us</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/Shop">
                    <span>Shop</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Blog">
                    <span>Blog</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/Community"
                  >
                    <span>Community</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="ContactUs">
                    <span>Contact Us</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="cart">
                    <span> Cart </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container d-lg-block position-relative">
          <div
            className="collapse navbar-collapse navbar__links--bg"
            id="navbarSupportedContent"
          >
            <Link
              className="navbar-brand nav--custom-logo text-light d-lg-block d-none"
              to="/"
            >
              <img src={logo} alt="" />
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-end text-light text-center">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="">
                  <span>Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  <span>About Us</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/Shop">
                  <span>Shop</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Blog">
                  <span>Blog</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/Community">
                  <span>Community</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ContactUs">
                  <span>Contact Us</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="cart">
                  <span> Cart - {cart.length}</span>
                </Link>
              </li>
              <li>
              <Link
                  className="nav-link"
                  onClick={() => dispatch(checkOut())}
                  to=""
                >
                  <span> Logout </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarComponent;
