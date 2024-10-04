import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Create the Cart Context
export const CartContext = createContext();

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  successMessage: '', // Add successMessage to the initial state
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
      };
    case 'CLEAR_CART':
      return { ...state, cart: [], successMessage: '' }; // Clear message when cart is cleared
    case 'SET_SUCCESS_MESSAGE':
      return { ...state, successMessage: action.payload }; // Set the success message
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const setSuccessMessage = (message) => {
    dispatch({ type: 'SET_SUCCESS_MESSAGE', payload: message });
  };

  return (
    <CartContext.Provider value={{ state, addToCart, removeFromCart, clearCart, setSuccessMessage }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
