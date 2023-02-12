import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, logIn, register } from "../RTK/authSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
export default function Login() {
  //sweet alert
  const MySwal = withReactContent(Swal);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { users } = useSelector((state) => state.authSlice);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const logInHandler = () => {
    const findItem = users.find(
      (user) =>
        username.trim() == user.fName && password.trim() == user.password
    );

    if (findItem) {
      if (findItem.fName == "Admin" && password == "123456789") {
        dispatch(logIn(findItem));
        Navigate("/AdminPage");
      } else {
        Navigate("/");
        dispatch(logIn(findItem));
      }
    } else {
      MySwal.fire({
        
        title: <p>{username} Not Found</p>,
      });
    }
  };
  return (
    <main className="login d-flex justify-content-center align-items-center">
      <div className="login__container">
        <div className="login__body d-flex justify-content-center text-center rounded-3 shadow-lg">
          <div className="login__contents p-5">
            <h2 className="h1">Sign In</h2>
            <div className="input-name mt-5">
              <i className="fa-regular fa-user"></i>
              <input
                required
                type="text"
                placeholder="Username"
                name=""
                id=""
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-name my-4">
              <i className="fa-solid fa-lock"></i>
              <input
                required
                type="password"
                placeholder="Password"
                name=""
                id=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="login__actions d-flex justify-content-between">
              <div className="remember d-flex">
                <input type="checkbox" className="me-1" id="rad" />
                <label htmlFor="rad" className="text-white-50">
                  Remember Me
                </label>
              </div>
              <div className="forget">
                <a
                  href="#"
                  className="text-decoration-underline text-color fast-transition"
                >
                  Forget Password?
                </a>
              </div>
            </div>
            <button
              className="login__btn primary-btn--non-bg mt-5 px-5 fs-5 py-1 mb-3"
              onClick={logInHandler}
            >
              Login
            </button>
            <div className="or-sign position-relative">Or</div>
            <div className="sign-up">
              <h6 className="text-white">You Don’t Have an account</h6>
              <button
                className="login__btn primary-btn--non-bg mt-4 px-5 fs-5 py-1 mb-3"
                onClick={() => dispatch(register())}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
