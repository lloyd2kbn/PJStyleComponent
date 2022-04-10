import React from 'react'
import { StyledCart } from './styles/Cart.styled'
function Cart({item:{id,title,body,image}}) {
  return (
    <StyledCart layout={id%2===0?'row-reverse':'row'}>
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
        <div>
            <img src={`./images/${image}`} alt="" />
        </div>
    </StyledCart>
  )
}

export default Cart