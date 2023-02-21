import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/Login'
import Registrar from './pages/Registrar'
import OlvidePassword from './pages/OlvidePassword'
import NuevoPassword from './pages/NuevoPassword'
import ConfirmarCuenta from './pages/ConfirmarCuenta'
import AreaPrivada from './layouts/AreaPrivada'
/* import DataProductos from './pages/DataProductos' */


/* console.log(import.meta.env.VITE_BACKEND_URL) */
function App() {
 /*  const [count, setCount] = useState(0) */

 /* const autorizado = true; */

  return (
    <BrowserRouter>    
     <Routes>
      {/* ESTAS SON RUTAS PUBLICAS QUE SIRVEN PARA EL INGRESO DEL USUARIO */}
       <Route path='/' element={<AuthLayout />}>
        <Route index element={<Login />}/>
        <Route path='registrar' element={<Registrar />}/>
        <Route path='olvide-password' element={<OlvidePassword />}/>
        <Route path='olvide-password/:token' element={<NuevoPassword />}/>      
        <Route path='confirmar/:token' element={<ConfirmarCuenta />}/>               
       </Route>     

      {/* ESTAS SON LAS RUTAS PARA LAS AREAS PRIVADAS, AUN NO ESTA TERMINDADA */}
       <Route>  
        <Route path='area-privada' element={<AreaPrivada />}/> 
        {/* <Route index element={<DataProductos />}/> */}     
        {/* {autorizado ? <Route path='client/products' element={<DataProductos />}/> : console.log("HOLA")}  */}
       </Route>  

     </Routes>
    </BrowserRouter>
  )
}

export default App
