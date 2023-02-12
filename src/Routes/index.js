import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Shop from "../pages/Shop";
import Blog from "../pages/Blog";
import Community from "../pages/Community";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import AgeChecker from "../pages/AgeChecker";
import NotFound from "../pages/NotFound";
import AdminPage from "../pages/AdminPage";
import AddproductPage from "../pages/AddproductPage";
import EditproductPage from "../pages/EditproductPage";
import DetailsPage from "../pages/DetailsPage";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import SignUp from "../pages/Register";
import MessagePage from "../pages/MessagePage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "Shop",
        element: <Shop />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "Blog",
        element: <Blog />,
      },
      {
        path: "Community",
        element: <Community />,
      },
      {
        path: "ContactUs",
        element: <ContactUs />,
      },
      {
        path: "ProductDetails/:id",
        element: <ProductDetails />,
      },
      {
        path: "AgeChecker",
        element: <AgeChecker />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "AdminPage",
        element: <AdminPage />,
      },
      {
        path: "AdminPage/MessagePage",
        element: <MessagePage />,
      },
      {
        path: "AddproductPage",
        element: <AddproductPage />,
      },
      {
        path: "EditproductPage/:id",
        element: <EditproductPage />,
      },
      {
        path: "DetailsPage/:id",
        element: <DetailsPage />,
      },
      {
        path: "Cart",
        element: <Cart />,
      },
      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "Register",
        element: <SignUp />,
      },
    ],
  },
]);
