import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Users from "./Pages/Users";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import "./styles/global.scss";
import User from "./Components/User";

function App() {
  function Layout() {
    return (
      <>
        <div className="menu">
          <Navbar />
          <div className="container">
            <div className="menuContainer">
              <Menu />
            </div>
            <div className="contentContainer">
              <Outlet />
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products",
          element: <Product />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
