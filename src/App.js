import { Outlet } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import { useSelector } from "react-redux";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  const { userLogged } = useSelector((state) => state.authSlice);
  const { isRegistered } = useSelector((state) => state.authSlice);
  return (
    <div className="App">
      {userLogged !=null ? (
        <>
          {userLogged === "Admin" ? "" : <NavbarComponent />}

          <Outlet />
        </>
      ) : isRegistered ? (
        <Register />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;