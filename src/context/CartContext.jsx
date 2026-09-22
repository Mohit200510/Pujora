import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const CartContext = createContext();

export const CartProvider = ({children})=> {

  const[closeCart,setCloseCart] = useState(false);

  return (
    <CartContext.Provider value={{closeCart,setCloseCart}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext