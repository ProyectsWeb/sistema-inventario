import React from 'react'
import { Outlet } from 'react-router-dom'


const AuthLayout = () => {
  return (
    <main>
      <div>AuthLayout</div>     
      <Outlet />
    </main>
  )
}

export default AuthLayout