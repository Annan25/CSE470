import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import CarParts from "../Pages/CarParts/CarParts";
import RentalSystem from "../Pages/RentalSystem/RentalSystem";
import CarDealership from "../Pages/CarDealership/CarDealership";
import CarDealershipDetails from "../Pages/CarDealership/CarDealershipDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Payment from "../Pages/More/Payment/Payment";
import Orders from "../Pages/ForAdmin/Orders/Orders";
import SellingCars from "../Pages/ForAdmin/SellingCars/SellingCars";
import SellingParts from "../Pages/ForAdmin/SellingParts/SellingParts";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: 'login',
          element: <Login></Login>,
        },
        {
          path: 'register',
          element: <Register></Register>,
        },
        {
          path: "RentalSystem",
          element: <RentalSystem></RentalSystem>,
          loader: () =>  fetch("http://localhost:5000/destinations"),
        },
        {
          path: "carParts",
          element: <CarParts></CarParts>,
          loader: () =>  fetch("http://localhost:5000/carParts"),
        },
        {
          path: "cars",
          element: <CarDealership></CarDealership>,
          loader: () =>  fetch("http://localhost:5000/sellingCars"),
        },
        {
          path: "cars/:carId",
          element: <CarDealershipDetails></CarDealershipDetails>,
          loader: ({params}) =>  fetch(`http://localhost:5000/sellingCars/${params.carId}`),
        },
        {
          path: "Orders",
          element: <PrivateRoute><Orders></Orders></PrivateRoute>,
          loader: () =>  fetch("http://localhost:5000/orders"),
        },
        {
          path: "SellingCars",
          element: <PrivateRoute> <SellingCars></SellingCars> </PrivateRoute>,
           loader: () =>  fetch("http://localhost:5000/sellingCars"),
        },
        {
          path: "SellingParts",
          element: <PrivateRoute> <SellingParts></SellingParts> </PrivateRoute>,
          loader: () =>  fetch("http://localhost:5000/carParts"),
        },
        {
          path: 'Payment',
          element: <PrivateRoute><Payment></Payment></PrivateRoute>,
        },
        {
          path: 'dashboard',
          element: <Register></Register>,
        }
      ]
    },
  ]);