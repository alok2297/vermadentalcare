import React, { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { ScrollToTop } from "../Helper";
import { useStorage } from "./useStorage";
import { Fallback } from "../components/Fallback";
import { AppointmentBook } from "../pages/AppointmentBook";

//lazy loaded Pages and Components
const Dashboard = lazy(() => import("../pages/Dashboard"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const MyAppointments = lazy(() => import("../pages/MyAppointments"));
const Services = lazy(() => import("../pages/Services"));
const ContactUs = lazy(() => import("../pages/Contactus"));
const Aboutus = lazy(() => import("../pages/Aboutus"));
const Dentistry = lazy(() => import("../pages/Dentistry"));
const Price = lazy(() => import("../pages/Price"));
export const Routers = () => {
  const hasTokenValue = useStorage("authToken");
  console.log(hasTokenValue + "kk");
  const [hasToken, setHasToken] = useState(false);
  console.log(hasToken);
  const routesList = [
    {
      path: "/",
      element: <Dashboard />,
      children: [],
      requireToken: false,
    },
    {
      path: "/login",
      element: <LoginPage />,
      children: [],
      requireToken: false,
    },
    {
      path: "/myappointment",
      element: <MyAppointments />,
      children: [],
      requireToken: true,
    },
    {
      path: "/services",
      element: <Services />,
      children: [],
      requireToken: false,
    },
    {
      path: "/contact",
      element: <ContactUs />,
      children: [],
      requireToken: false,
    },
    {
      path: "/about",
      element: <Aboutus />,
      children: [],
      requireToken: false,
    },
    {
      path: "/dentistry",
      element: <Dentistry />,
      children: [],
      requireToken: false,
    },
    {
      path: "/appointment",
      element: <AppointmentBook />,
      children: [],
      requireToken: false,
    },
    {
      path: "/pricing",
      element: <Price />,
      children: [],
      requireToken: false,
    },
  ];

  useEffect(() => {
    if (hasTokenValue && hasTokenValue !== "") {
      setHasToken(true);
    } else {
      setHasToken(false);
    }
  }, [hasTokenValue]);
  console.log(hasToken);

  const PrivateRoute = ({ element }) => {
    const hasTokenValue = useStorage("authToken");
    return hasTokenValue ? element : <Navigate replace to="/login" />;
  };

  const PublicRoute = ({ element }) => {
    const hasTokenValue = useStorage("authToken");
    return hasTokenValue ? <Navigate replace to="/" /> : element;
  };

  function getRoute(routesList) {
    return routesList.map((route, index) => {
      let element;

      if (route.requireToken) {
        element = <PrivateRoute element={route.element} />;
      } else if (route.path === "/login") {
        element = <PublicRoute element={route.element} />;
      } else {
        element = route.element;
      }

      return (
        <Route key={index} path={route.path} element={element}>
          {route.children && getRoute(route.children)}
        </Route>
      );
    });
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
      <Suspense
        fallback={
          <div>
            <DelayedFallback />
          </div>
        }
      >
        <Routes>{getRoute(routesList)}</Routes>
      </Suspense>
    </BrowserRouter>
  );
};
