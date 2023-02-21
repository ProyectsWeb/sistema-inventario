import React, { useState } from 'react'



const Clientes = ({selected, setSelected}) => {     

    const [isActive, setIsActive] = useState(false)
    const options = ['Clientes', 'Productos', 'Transacciones', 'Geografia'];
    
  return (        

    <div className='dropdown'>
    <div className='dropdown-btn' onClick={ ()=>{ setIsActive(!isActive)} }>Clientes</div> 
            
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

  )
}

export default Clientes