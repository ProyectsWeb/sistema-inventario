import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Tablero from '../components/Tablero'
import { Footer } from '../components/Footer'
import Ventas from '../components/Ventas'
import '../../public/css/AreaPrivada.css'


const AreaPrivada = () => {

  const [selected, setSelected ] = useState("");
  
  const [auth, setAuth] = useState(true)
console.log(auth)
  return (
    <>
    {auth ? <Outlet /> : <Navigate to="/" />}

    <div className='container_area-privada'>   
      <Header />      

      <div className='display-info'>
      <Sidebar selected={selected} setSelected={setSelected } />    
      <Tablero />  
      </div>
      <Footer />
      
    </div>  
    </>
  )
}

export default AreaPrivada