import { useState } from "react";
import { useDispatch } from "react-redux";
import { postUser, signIn } from "../RTK/authSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
export default function Register() {
  const MySwal = withReactContent(Swal);
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const signUpHandler = () => {
    if (username.trim() && email.trim() && password.trim()) {
      dispatch(
        postUser({
          fName: username,
          password,
          email,
        })
      );
      MySwal.fire({
        title: <p>{username} is registered successfull!!!</p>,
      });
    }
  };

  return (
    <main className="login d-flex justify-content-center align-items-center">
      <div className="login__container">
        <div className="login__body d-flex justify-content-center text-center rounded-3 shadow-lg">
          <div className="login__contents p-5">
            <h2 className="h1">Sign Up</h2>
            <div className="input-name mt-5">
              <i className="fa-regular fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
                name=""
                id=""
              />
            </div>
            <div className="input-name mt-5 mb-4">
              <i className="fa-regular fa-envelope"></i>
              <input
                required
                type="text"
                placeholder="Email"
                name=""
                id=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-name mt-5 mb-4">
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
            <button
              className="login__btn primary-btn--non-bg mt-4 px-5 fs-5 py-1 mb-3"
              onClick={signUpHandler}
            >
              Sign Up
            </button>
            <div className="or-sign position-relative">Or</div>
            <div className="sign-up">
              <h6 className="text-white">You already have an account</h6>
              <button
                className="login__btn primary-btn--non-bg mt-4 px-5 fs-5 py-1 mb-3"
                onClick={() => dispatch(signIn())}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
