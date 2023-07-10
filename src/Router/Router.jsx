import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../page/Home/Home/Home";
import Menu from "../page/Menu/Menu";
import Order from "../page/Order/Order/Order";
import Login from "../page/Login/Login";
import SignUp from "../page/SignUp/SignUp";
import Secret from "../page/secret/Secret";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../page/Dashboard/MyCart/MyCart";
import AllUsers from "../page/Dashboard/AllUsers/AllUsers";
import PrivateRoutes from "./PrivateRoutes";
import AddItems from "../page/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../page/ManageItems/ManageItems";
import Payment from "../page/Dashboard/Payment/Payment";
import UserHome from "../page/Dashboard/UserHome/UserHome";
import AdminHome from "../page/Dashboard/AdminHome/AdminHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      { path: "/menu", element: <Menu></Menu> },
      { path: "/order/:category", element: <Order></Order> },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <SignUp></SignUp> },
      {
        path: "/secret",
        element: (
          <PrivateRoutes>
            {" "}
            <Secret></Secret>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "userhome",
        element: <UserHome></UserHome>,
      },
      {
        path: "mycart",
        element: <MyCart></MyCart>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      //admin home
      {
        path: "adminhome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "addItem",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
      {
        path: "manageitems",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
