import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from '../StateProvider'

function CheckoutProduct({id,title,image,rating,price,description}) {
    const [{basket},dispatch] = useStateValue()
    const removeProduct =()=>{
dispatch({
    type:'REMOVE_FROM_BASKET',
    id: id
})
console.log(basket)
    } 
  return (
    <div className='checkout_product'>
      <div className="product-cardd" id={id}>
    <div className="product-image">
      <img src={image} alt={title}  />
    </div>
    <div className="product-details">
      <p className="product-title">{title}</p>
      <div className="product-rating">
        {Array(rating)
          .fill()
          .map((_, index) => (
            <span key={index} role="img" aria-label="star">
              ⭐
            </span>
          ))}
      </div>
      <p className="product-description">{description}</p>
      <p className="product-price"> <small>$</small><strong> {price}  </strong></p>
    <button type="button" class="btn btn-danger remove-button" onClick={removeProduct} >Remove From Basket</button>

    </div>
  </div>
    </div>
  )
}

export default CheckoutProduct
