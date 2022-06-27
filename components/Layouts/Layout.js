import Script from 'next/script'
import React from 'react'
import Footer_blog from '../Footer/Footer_blog'
import Navbar_blog from '../Navbar/Navbar_blog'

const Layout = ({children}) => {
  return (
    <main>
      <Script 
        async
        custom-element="amp-ad"
        src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"
      />
      <Navbar_blog />
      
      
      <div className = 'bg-[#f1f1f1]' >
        {children}
    </div>
     <Footer_blog />     
    </main>
  )
}

export default Layout