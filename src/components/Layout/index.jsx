import Header from './Header'
import Footer from './Footer'
import React from 'react'

export default function Layout({ children, location }) {
  return (
    <div className="min-h-screen w-full">
      <Header location={location} />
      {children}
      <Footer />
    </div>
  )
}
