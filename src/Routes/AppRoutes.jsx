import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import PublicRoutes from "./ProtectedRoutes/PublicRoutes";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoutes from "./ProtectedRoutes/protectedRoutes";
import AuthLayout from "../Layouts/AuthLayout";
import Home from "../pages/Home";


const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoutes />,
      children: [
        {
            path : "",
          element: <PublicRoutes />,
          children: [
            {
             index : true,
              element: <Login />,
            },
            {
                path : "register",
                element : <Register/>
            }
          ],
        },
      ],
    },
    {
      path : "/home",
      element : <AuthLayout/>,
      children : [
        {
          path : "",
          element : <ProtectedRoutes/>,
          children : [
            {
              index : true ,
              element :<Home/>
            }
          ]
        }
      ]

    }
  ]);
  return <RouterProvider router={router} />;
};
export default AppRoutes;
