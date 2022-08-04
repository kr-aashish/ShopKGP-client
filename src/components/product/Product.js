import React from 'react'
import './Product.css'

function Product({id, title, image, price, rating}) {

  return (
    <div className='product'>

        <div className='product__info'> 
            <p>The lean startup</p> 
            <p className='product__price'> 
                <small>₹</small>
                <strong>200</strong>
            </p>
        </div>

        <div className='product__rating'>
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
        </div>

        <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"/>

        <button>Add to cart</button>

    </div>
  )
}

export default Product