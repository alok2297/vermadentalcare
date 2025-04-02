import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function LastSegment(){
    return useLocation().pathname.split("/").filter(Boolean).pop();
}

export const navbarItems = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/dentistry', label: 'Dentistry' },
    { to: '/myappointment', label: 'My Appointments' },
    { to: '/pricing', label: 'Pricing' },
    { to: "/login", label: "logout" },
];

export const navbarItemsNotAuth = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/dentistry", label: "Dentistry" },
  { to: "/pricing", label: "Pricing" },
  { to: "/login", label: "Login/Signup" },
];


export const ScrollToTop = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]); 
  return null;
};
