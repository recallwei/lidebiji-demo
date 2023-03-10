import React from "react"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ location, children }) => {
  return (
    <div className="w-full min-h-screen">
      <Header location={location} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
