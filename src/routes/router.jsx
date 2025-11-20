import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Aurh/Login/Login";
import Register from "../pages/Aurh/Register/Register";
import PrivetRoute from "./PrivetRoute";
import SendParcel from "../pages/SendParcel/SendParcel";
import DashboardLayout from "../layouts/DashboardLayout";
import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts></RootLayouts>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "rider",
        element: <PrivetRoute></PrivetRoute>,
      },
      {
        path: "send-parcel",
        element: (
          <PrivetRoute>
            <SendParcel></SendParcel>
          </PrivetRoute>
        ),
        loader: () => fetch("/serviceCenters.json").then((res) => res.json()),
      },
      {
        path: "coverage",
        Component: Coverage,
        loader: () => fetch("/serviceCenters.json").then((res) => res.json()),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  {
    path: 'dashboard',
    element: <PrivetRoute>
      <DashboardLayout></DashboardLayout>
    </PrivetRoute>,
    children: [
      {
        path: 'my-parcels',
        Component: MyParcels
      }
    ]
  }
]);
