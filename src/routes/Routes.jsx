import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Products from "../pages/Products";
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ViewDetails from "../pages/ViewDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/products',
          element: <Products></Products>,
          loader: ()=> fetch('http://localhost:5000/mobileCount')
        },
        {
          path:'/viewDetails/:id',
          element:  <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/mobiles/${params.id}`)
        },
       
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
          path: '/aboutus',
          element: <About></About>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        }
      ]
    },
  ]);