import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider'
import "./Subtotal.css"
import { getBasketTotal } from '../reducer'
function SubTotal() {
  const [{ basket }, dispatch] = useStateValue()

  return (
    <div className='subtotal-main'>
    <h1 className='subtotal-title'>SubTotal</h1>
    <CurrencyFormat
      renderText={(value) => (
        <>
          <p>
            SubTotal ({basket.length} items): <strong>` {value}`</strong>
          </p>
          <small className='subtotal_gift'>
            <input type='checkbox' /> The Order Contains a gift
          </small>
        </>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)} // Use the imported function to calculate the total
      displayType={'text'}
      thousandSeparator={true}
      prefix={'$'}
    />
    <button className='subtotal-button btn btn-danger'>Proceed to Checkout</button>
  </div>
  
  )
}

export default SubTotal
