import React from 'react'
import {NextUIProvider} from '@nextui-org/react'
import Header from './_components/Header'
// import Footer from './_components/Footer'
function Provider({children}: {children: React.ReactNode}){
  return (
    <NextUIProvider>
        {/* //! Header Section */}
      <Header />
        {children}
        {/* <Footer /> */}
    </NextUIProvider>
  )
}

export default Provider
