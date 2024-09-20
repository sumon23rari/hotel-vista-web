import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import RoomDetails from "../pages/Home/RoomDetails/RoomDetails";

import Register from "../pages/Register/Register";
import LogIn from "../pages/LogIn/LogIn";
import PrivateRoute from "./PrivateRoute";
import { singleRoom } from "../api/room";
import DashboardLayOut from "../layout/DashboardLayOut";
import AddRoom from "../pages/Host/AddRoom";
import MyListings from "../pages/Host/MyListings";
import HostRoute from "./HostRoute";
import AdminRoute from "./AdminRoute";
import ManageUsers from "../pages/Admin/ManageUsers";
import Profile from "../pages/Common/Profile";
import MyBookings from "../pages/Guest/MyBookings";
import ManageBookings from "../pages/Host/ManageBookings";
import Statistics from "../pages/Common/Statistics";


export const routers=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/room/:id',
                element:<PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>,
                loader:({params})=>singleRoom(params.id)
            },
            {
            path:'/signup',
            element:<Register></Register>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayOut/></PrivateRoute>,
        children:[
            {
                index: true,
                element: (
                  <PrivateRoute>
                    <Statistics/>
                  </PrivateRoute>
                ),
              },
           
            {
                path:'manage-users',
                element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path:'addRoom',
                element:<HostRoute>
            <AddRoom></AddRoom>
                </HostRoute>
            },
            {
                path:'myListings',
                element:<HostRoute><MyListings></MyListings></HostRoute>
            },
            {
                path:'manageBookings',
                element:<HostRoute><ManageBookings/> </HostRoute>
            },
            {
              path:'profile',
              element:<Profile></Profile>  
            },
            {
                path:'my-bookings',
                element:<MyBookings></MyBookings>
            },
          
        ]
    }
]);