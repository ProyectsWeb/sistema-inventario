import React, { useState } from 'react'



const Productos = ({selected, setSelected}) => {


    const [isActive, setIsActive] = useState(false)
    const options = ['Productos']; 
    
  return (        

    <div className='dropdown'>
     <div className='dropdown-btn' onClick={ ()=>{ setIsActive(!isActive)} }>Productos
             
     {isActive && (
       <div className='dropdown-content'>
         {options.map( (option, index ) => (
           <div className='dropdown-item' key={index} onClick={ (e)=>{ 
             setSelected(option)
             setIsActive(false)                
           }}>{ option }</div>
         ))}
     </div>
     )}   

     </div> 
   </div>  

        

  )
}

export default Productos