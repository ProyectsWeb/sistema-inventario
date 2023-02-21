import React from 'react'
import DataProductos from '../pages/DataProductos'
import '../../public/css/Tablero.css'


const Tablero = () => {
  return (
    <div className='dashboard'>
     <div className='title-dashboard'>
       <p className='dash'>Dashboard</p>
     </div>

      <div className='estadisticas'>
        <div className='box-data'>
          <p className='dato'>Customers</p>
          <span className='total'>36,254</span>
          <span className='porcentaje'>5.27%</span>
          <span className='description'>Since Last Month</span>
        </div>

        <div className='box-data'>
          <p className='dato'>Orders</p>
          <span className='total'>5,543</span>
          <span className='porcentaje'>1.08%</span>
          <span className='description'>Since Last Month</span>
        </div>

        <div className='box-data'>
          <p className='dato'>Revenue</p>
          <span className='total'>6,254</span>
          <span className='porcentaje'>7.00%</span>
          <span className='description'>Since Last Month</span>
        </div>

        <div className='box-data'>
          <p className='dato'>Growth</p>
          <span className='total'>30.56</span>
          <span className='porcentaje'>4.87%</span>
          <span className='description'>Since Last Month</span>
        </div>

        
      </div>
     <DataProductos />
    </div>
  )
}

export default Tablero