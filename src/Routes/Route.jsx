import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import MenProducts from "../Pages/Home/Products/MenProducts";
import WomenProducts from "../Pages/Home/Products/WomenProducts";
import ChildrenProducts from "../Pages/Home/Products/ChildrenProducts";
import AccessoriesProducts from "../Pages/Home/Products/AccessoriesProducts";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/Login/SignIn";
import { productsAndCartLoader } from "../Loaders/productsAndCartLoader";
import Orders from "../Pages/Orders/Orders";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/men-products",
        element: <MenProducts />,
      },
      {
        path: "/women-products",
        element: <WomenProducts />,
      },
      {
        path: "/children-products",
        element: <ChildrenProducts />,
      },
      {
        path: "/accessories-products",
        element: <AccessoriesProducts />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact></Contact> ,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/orders",
        loader: productsAndCartLoader,
        element: <Orders> </Orders>,
      },
    ],
  },
]);
export default router;
