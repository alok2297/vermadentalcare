import React, { useEffect, useState } from 'react'
export const useStorage = (key) => {
    const [storageValue, setStorageValue] = useState(localStorage.getItem(key));
  
    useEffect(() => {
      const handleStorageChange = () => {
        setStorageValue(localStorage.getItem(key));
        console.log(storageValue);
        if (!localStorage.getItem(key)) {
          window.location.href = "/login";
        }
      };
  
      window.addEventListener("storage", handleStorageChange);
  
      return () => {
        window.removeEventListener("storage", handleStorageChange);
      };
    }, [key]);
  
    return storageValue;
}
