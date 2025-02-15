import { useLocation } from "react-router-dom";

export function LastSegment(){
    return useLocation().pathname.split("/").filter(Boolean).pop();
}

export const navbarItems = [
    { to: '/', label: 'Home' },
    { to: '/dentistry', label: 'Dentistry' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' },
    {to: '/login', label: 'Login/Signup'}
  ];