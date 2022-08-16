import React from 'react'
import { useStateValue } from "../../StateProvider";
import './Product.css'

function Product({id, title, image, price, rating}) {
  const [{basket}, dispatch] = useStateValue();

  console.log("This is the basket ", basket);

  const addToBasket = () => {
    //dispatch an item item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image, 
        price: price, 
        rating: rating
      },
    });
  };

  return (
    <div className='product'>

        <div className='product__info'> 
            <p>{title}</p> 
            <p className='product__price'> 
                <small>₹</small>
                <strong>{price}</strong>
            </p>
        </div>

        <img src={image} alt=' '/>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>

        <button onClick={addToBasket}>Add to cart</button>

    </div>
  )
}

export default Product