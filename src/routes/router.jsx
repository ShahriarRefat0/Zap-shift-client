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
import Payment from "../pages/Dashboard/MyParcels/Payment/Payment";
import PaymentSuccess from "../pages/Dashboard/MyParcels/Payment/PaymentSuccess";
import PaymentCancelled from "../pages/Dashboard/MyParcels/Payment/PaymentCancelled";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import Rider from "../pages/Rider/Rider";
import ApproveRiders from "../pages/Dashboard/ApproveRiders/ApproveRiders";
import UsersManagement from "../pages/Dashboard/UsersManagement/UsersManagement";
import AdminRoute from "./AdminRoute";
import AssignRiders from "../pages/Dashboard/AssignRiders/AssignRiders";
import RiderRoute from "./RiderRoute";
import AssignDeliveries from "../pages/Dashboard/AssignDeliveries/AssignDeliveries";
import CompletedDeliveries from "../pages/Dashboard/CompletedDeliveries/CompletedDeliveries";
import ParcelTrack from "../pages/ParcelTrack/ParcelTrack";

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
        element: (
          <PrivetRoute>
            <Rider></Rider>
          </PrivetRoute>
        ),
        loader: () => fetch("/serviceCenters.json").then((res) => res.json()),
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
      {
        path: "parcel-tack/:trackingId",
        Component: ParcelTrack,
       
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
    path: "dashboard",
    element: (
      <PrivetRoute>
        <DashboardLayout></DashboardLayout>
      </PrivetRoute>
    ),
    children: [
      {
        path: "my-parcels",
        Component: MyParcels,
      },
      {
        path: "payment/:parcelId",
        Component: Payment,
      },
      {
        path: "payment-history",
        Component: PaymentHistory,
      },
      {
        path: "payment-success",
        Component: PaymentSuccess,
      },
      {
        path: "payment-cancelled",
        Component: PaymentCancelled,
      },
      //rider only routes

      {
        path: 'assign-deliveries',
        element: <RiderRoute>
          <AssignDeliveries></AssignDeliveries>
        </RiderRoute>
      },
      {
        path: 'completed-deliveries',
        element: <RiderRoute>
          <CompletedDeliveries></CompletedDeliveries>
        </RiderRoute>
      },
      //admin only route
      {
        path: "approve-riders",
        element: <AdminRoute>
          <ApproveRiders></ApproveRiders>
        </AdminRoute>
      },
      {
        path: "users-management",
        element: <AdminRoute>
          <UsersManagement></UsersManagement>
        </AdminRoute>
      },
      {
        path: "assign-riders",
        element: <AdminRoute>
          <AssignRiders></AssignRiders>
        </AdminRoute>
      },
    ],
  },
]);
