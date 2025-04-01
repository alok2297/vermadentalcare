import React from 'react'
import { Navbar } from '../components/Navbar'
import AppointmentBooking from '../components/AppointmentBooking/AppointmentBooking'
import { Footer } from '../components/footer'

export const AppointmentBook = () => {
  return (
    <div>
        <Navbar/>
        <AppointmentBooking/>
        <Footer/>
    </div>
  )
}
