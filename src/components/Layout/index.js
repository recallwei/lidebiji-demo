import React from "react"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div className="w-screen min-h-screen overflow-y-auto">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
