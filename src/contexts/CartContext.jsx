import { useContext, useReducer, createContext } from "react";
import productsData from "../api/products";
const CartContext = createContext();

function CartProvider({ children }) {
  // reducer here
  const initialState = {
    productsData,
    cart: [],
    
  };
  function cartReducer(state, action) {
    switch (action.type) {
      case "addItem": {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, qty: 1 }],
        };
      }
      case "removeItem": {
        return {
          ...state,
          cart: [...state.cart.filter((item) => item.id !== action.payload)],
        };
      }
      case "updateQty": {
        return {
          ...state,
          cart: state.cart.map(
            (item) =>
              item.id === action.payload.id
                ? { ...item, qty: action.payload.qty } // Update the qty for the matched item
                : item // Return the item unchanged if id doesn't match
          ),
        };
      }

      case "sortLowToHigh": {
        return {
          ...state,
          productsData: {
            products: [...state.productsData.products].sort((a, b) => {
              return a.price - b.price;
            }),
          },
        };
      }
      case "highToLow": {
        return {
          ...state,
          productsData: {
            products: [...state.productsData.products].sort((a, b) => {
              return b.price - a.price;
            }),
          },
        };
      }
      case "sortByPrice": {
        return {
          ...state,
          productsData: {
            ...state.productsData, // Keep other properties intact
            products: [...productsData.products].filter((item) => {
              return item.price <= action.payload; // Show products with price less than or equal to the selected price
            }),
          },
        };
      }
      case "sortByRating": {
        return {
          ...state,
          productsData: {
            ...state.productsData, // Keep other properties intact
            products: [...productsData.products].filter((item) => {
              return item.rating >= action.payload; // Show products with price less than or equal to the selected price
            }),
          },
        };
      }
      case "resetFilters": {
        return {
          cart: [...state.cart],
          productsData,
        };
      }
    }
  }
  const [state, dispatch] = useReducer(cartReducer, initialState);
  function addItem(itemData) {
    dispatch({ type: "addItem", payload: itemData });
  }
  function removeItem(itemID) {
    dispatch({ type: "removeItem", payload: itemID });
  }
  function updateQuantity(id, qty) {
    dispatch({ type: "updateQty", payload: { id, qty } });
  }
  function sortLowToHigh() {
    dispatch({ type: "sortLowToHigh" });
  }
  function highToLow() {
    dispatch({ type: "highToLow" });
  }
  function sortByPrice(price) {
    dispatch({ type: "sortByPrice", payload: price });
  }
  function sortByRating(rating) {
    dispatch({ type: "sortByRating", payload: rating });
  }
  function resetFilters() {
    dispatch({ type: "resetFilters" });
  }
  return (
    <CartContext.Provider
      value={{
        productsData,
        state,
        addItem,
        removeItem,
        updateQuantity,
        sortLowToHigh,
        highToLow,
        sortByPrice,
        sortByRating,
        resetFilters,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("Cart Context was used out side the Cart Provider");
  return context;
}
export { CartProvider, useCart };
