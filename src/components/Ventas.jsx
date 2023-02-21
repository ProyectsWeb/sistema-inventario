import React, { useState } from 'react'


const Ventas = ({selected, setSelected}) => {


    const [isActive, setIsActive] = useState(false)
    const options = ['Ventas']; 
    
  return (        

    <div className='dropdown'>
     <div className='dropdown-btn' onClick={ ()=>{ setIsActive(!isActive)} }>Ventas
             
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

export default Ventas