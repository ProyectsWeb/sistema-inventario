import axios from 'axios'
import React, { useEffect, useRef } from 'react'
import '../../public/css/DataProductos.css'
 /* const obtenerProductos = async()=>{ 
    const data = await axios(`${import.meta.env.VITE_BACKEND_URL}/client/products`)     
  console.log(data)
 }   */
  
const DataProductos = () => {      
  const divRef = useRef();

  useEffect( ()=>{          
   const data = axios(`${import.meta.env.VITE_BACKEND_URL}/client/products`)
                .then( (response)=> {
                  console.log(response);
                  const datos = response.data
                  console.log(datos)
                  datos.forEach(element => {
                    const {name, createdAt, updatedAt, category, description} = element;
                    divRef.current.innerHTML += `
                    <div class="list-clientes">
                      <p><span>Nombre:</span> ${name}</p>
                      <p><span>Categoria:</span> ${category}</p>
                      <p><span>Descripcion:</span> ${description}</p>
                      <p><span>Creado:</span> ${createdAt}</p>
                      <p><span>Actualizado el:</span> ${updatedAt}</p>
                    </div>
                    `;                    
                  });
  })
  .catch(function (error) {
    console.log(error);
  });        
  }, [])
       
  return (
    <>
     <h3>Clientes</h3>
    <div className='data' ref={divRef}> </div>
    </>
  )
}

export default DataProductos