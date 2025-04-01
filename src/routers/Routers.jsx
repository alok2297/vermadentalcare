import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { ScrollToTop } from '../Helper';
import { useStorage } from './useStorage';
import { Fallback } from '../components/Fallback';
import { AppointmentBook } from '../pages/AppointmentBook';

//lazy loaded Pages and Components
const Dashboard = lazy(() => import('../pages/Dashboard'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const MyAppointments = lazy(() => import('../pages/MyAppointments'));
const Services = lazy(() => import('../pages/Services'));
const ContactUs = lazy(() => import('../pages/Contactus'));
const Aboutus = lazy(() => import('../pages/Aboutus'));
const Dentistry = lazy(() => import('../pages/Dentistry'));
const Price = lazy(()=> import('../pages/Price'));
const AppointmentBooking = lazy(() => import('../components/AppointmentBooking/AppointmentBooking'));
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
      element:<AppointmentBook/>,
      children:[],
      requireToken:false,
    },
    {
      path:"/pricing",
      element:<Price/>,
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

  const DelayedFallback = () => {
    const [show, setShow] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => setShow(true), 5000);
      return () => clearTimeout(timer);
    }, []);
  
    return show ? <Fallback /> : null;
  };
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div><DelayedFallback/></div>}>
        <Routes>{getRoute(routesList)}</Routes>
      </Suspense>
    </BrowserRouter>
  );
}
