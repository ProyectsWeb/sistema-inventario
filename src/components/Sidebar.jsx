import React, { useState } from 'react'
import '../../public/css/Sidebar.css'
import Ventas from './Ventas';
import Productos from './Productos';
import Clientes from './Clientes';
import { Link, NavLink } from 'react-router-dom';


const Sidebar = ({selected, setSelected}) => {

    const [isActive, setIsActive] = useState(false)
    const options = ['Clientes', 'Productos', 'Transacciones', 'Geografia'];    
    
    
  return (
    <div className='container-sidebar'>      

         <NavLink className="navbar">

          <Link to="/area-privada" className="link">
            <div className=''>
              <i className="fa fa-home icon" aria-hidden="true"></i>
              <span className="span">Home</span>
            </div>           
          </Link>

          <Link to="clientes" className="link">
            <div className=''>
              <i className="fa fa-users icon" aria-hidden="true"></i>
              <span className="">Clientes</span>
            </div>
          </Link>



          <Link to="ventas" className="link">
            <div className=''>
             <i className="fa fa-shopping-cart icon" aria-hidden="true"></i>                      
             <span className="">Ventas</span>
            </div>
          </Link>


          <Link to="productos" className="link">          
            <div className=''> 
            <i class="fa fa-product-hunt icon" aria-hidden="true"></i>
              <span className="">Productos</span>            
            </div>
          </Link>


         </NavLink>

        
    </div>
  )
}

export default Sidebar

/* box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%); */