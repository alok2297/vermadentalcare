import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Dashboard } from '../pages/Dashboard';
export const Routers = () => {

  const routesList = [
    {
      path:"/",
      element: <Dashboard/>,
      children: [],
      requireToken: false,
    },
  ];

  function getRoute(routesList) {
    return routesList.map((route,index) => (
      <Route key={index} path={route.path} element={route.element}>
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
