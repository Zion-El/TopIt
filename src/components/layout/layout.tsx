import React from 'react'
import MiniDrawer from './navbar'


interface iProps {
    children : React.ReactNode
}

function Layout({children} : iProps) {
  return (
    <>
      <MiniDrawer children= {children} /> 

    </>
    
  
  )
}

export default Layout