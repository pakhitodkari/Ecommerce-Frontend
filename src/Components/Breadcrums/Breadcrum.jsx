import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

export const Breadcrum = ({product}) => {
    
  return (
    <div className='breadcrum'>
        HOME <img src={arrow_icon} alt=''></img> SHOP <img src={arrow_icon}
        alt=''></img> {product.category} <img src={arrow_icon} alt=''></img> {product.name}
    </div>
  )
}
