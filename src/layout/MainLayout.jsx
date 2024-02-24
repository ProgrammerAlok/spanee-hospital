import { NavBar } from 'components'
import Footer from 'components/Footer'
import React from 'react'

const MainLayout = ({ children }) => {
  return (
    <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto overflow-hidden">
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout