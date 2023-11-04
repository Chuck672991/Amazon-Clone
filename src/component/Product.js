import React from 'react'
import "./Product.css"
import { useStateValue } from '../StateProvider'

function Product({title,price,rating,description,image,id}) {
  const [{},dispatch]=useStateValue() //jb bhi datalayer ma manipulation krni ho dispatch kaam ayega
  const addToBasket = ()=>{
    // Adding items to a basket where dispatch will act as a gun
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id:id,
        title : title,
        price: price,
        image:image,
        rating:rating,
        description:description 


      }
    })
  }
  return (
    <div className="product-card" id={id}>
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
      <p className="product-description">{description.slice(0, 170)+"..."}</p>
      <p className="product-price"><small>$</small> <strong>{price}</strong></p>
    <button type="button" class="btn btn-primary" onClick={addToBasket}>Add To Cart</button>

    </div>
  </div>
  
    
   
  )
}


export default Product
