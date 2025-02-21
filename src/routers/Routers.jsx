import React, { useEffect, useState } from 'react'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Dashboard } from '../pages/Dashboard';
import { Appointment } from '../components/Appointment/Appointment';
import { useStorage } from './useStorage';
import { LoginPage } from '../pages/LoginPage';
import { Services } from '../pages/Services';
import { ContactUs } from '../pages/Contactus';
import { Aboutus } from '../pages/Aboutus';
import { Dentistry } from '../pages/Dentistry';
import { ScrollToTop } from '../Helper';
import { MyAppointments } from '../pages/MyAppointments';
import AppointmentBooking from '../components/AppointmentBooking/AppointmentBooking';
export const Routers = () => {
  const hasTokenValue = useStorage("token");
  const [hasToken, setHasToken] = useState(false);
  const routesList = [
    {
      path:"/",
      element: <Dashboard/>,
      children: [],
      requireToken: false,
    },
    // {
    //   path:"/appointment",
    //   element:<Appointment/>,
    //   children:[],
    //   requireToken:true,
    // },
    {
      path:"/login",
      element:<LoginPage/>,
      children:[],
      requireToken:false,
    },
    {
      path:"/myappointment",
      element:<MyAppointments/>,
      children:[],
      requireToken:false,
    },
    {
      path:"/services",
      element:<Services/>,
      children:[],
      requireToken:false,
    },
    {
      path:"/contact",
      element:<ContactUs/>,
      children:[],
      requireToken:false,
    },
    {
      path:"/about",
      element:<Aboutus/>,
      children:[],
      requireToken:false,
    },
    {
      path:"/dentistry",
      element:<Dentistry/>,
      children:[],
      requireToken:false,
    },
    {
      path:"/appointment",
      element:<AppointmentBooking/>,
      children:[],
      requireToken:false,
    }
  ];

  useEffect(() => {
    if (hasTokenValue && hasTokenValue !== "") {
      setHasToken(true);
    } else {
      setHasToken(false);
    }
  }, [hasTokenValue]);

  const PrivateRoute = ({ element }) => {
    const hasTokenValue = useStorage("token"); 
    return hasTokenValue&&element.requireToken ? element : <Navigate replace to="/login" />;
  };

  function getRoute(routesList) {
    return routesList.map((route,index) => (
      <Route key={index} path={route.path} element={
        route.requireToken ? <PrivateRoute element={route.element} /> : route.element
      }>
        {route.children && getRoute(route.children)}
      </Route> 
    ))
  }
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>{getRoute(routesList)}</Routes>
    </BrowserRouter>
  );
}
