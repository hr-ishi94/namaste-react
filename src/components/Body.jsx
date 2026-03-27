import React from 'react'
import ProductCard from './Products/ProductCard'

const Body = () => {
  return (
    <div className='product-body'>
        <h1 style={{padding:"50px"}}>Choose the new Receipes of Mama's Kitchen</h1>
        <div className="product-list">

        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>  
        </div>
    </div>
  )
}

export default Body
