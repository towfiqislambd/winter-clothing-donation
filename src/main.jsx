import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import AuthProvider from './components/AuthProvider';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import PrivateRoutes from './components/PrivateRoutes';
import Details from './components/Details';
import ForgetPassword from './components/ForgetPassword';
import DonationCampaigns from './components/DonationCampaigns';
import ProfileUpdate from './components/ProfileUpdate';
import HowToHelp from './components/HowToHelp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/donation-campaigns",
        element: <DonationCampaigns></DonationCampaigns>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/details",
        element: <PrivateRoutes><Details></Details></PrivateRoutes>
      },
      {
        path: "/dashboard",
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
      },
      {
        path: "/forget-password",
        element: <ForgetPassword></ForgetPassword>
      },
      {
        path: "/update-profile",
        element: <ProfileUpdate></ProfileUpdate>
      },
      {
        path: "/how-to-help",
        element: <HowToHelp></HowToHelp>
      }
    ]
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
