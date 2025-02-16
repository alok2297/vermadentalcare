import React, { useEffect, useState } from 'react'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Dashboard } from '../pages/Dashboard';
import { Appointment } from '../components/Appointment/Appointment';
import { Login } from '../components/Login';
import { useStorage } from './useStorage';
import { LoginPage } from '../pages/LoginPage';
import { DentalServices } from '../components/Services/DentalServices';
import { Services } from '../pages/Services';
import { ContactUs } from '../pages/Contactus';
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
      path:"/appointment",
      element:<Appointment/>,
      children:[],
      requireToken:true,
    },
    {
      path:"/login",
      element:<LoginPage/>,
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
      <Routes>{getRoute(routesList)}</Routes>
    </BrowserRouter>
  )
}
