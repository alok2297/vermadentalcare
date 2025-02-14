import React from 'react'
import { Navbar } from '../components/Navbar'
import { Login } from '../components/Login'
import { Footer } from '../components/footer'

export const LoginPage = () => {
  return (
    <div>
        <Navbar/>
        <Login/>
        <Footer/>
    </div>
  )
}
