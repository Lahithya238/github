import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const Cartprovider = ({ children }) => {
    const [cartItems, setcartItems] = useState([]);

    const localUpdates = (updates) => {
        localStorage.setItem('token', JSON.stringify(updates))
    }
    const addToCart = (obj) => {
        console.log("carts", obj);
        const updatedCarts = [...cartItems, obj]
        console.log('updated', updatedCarts)
        setcartItems(updatedCarts)
        localUpdates(updatedCarts);
    }

    const deleteCarts = (id) => {
        console.log('deleteditems', id);
        const updatedDeleteCarts = cartItems.filter(values => values.id !== id);
        console.log("deleted", updatedDeleteCarts)
        setcartItems(updatedDeleteCarts)
        localUpdates(updatedDeleteCarts)
    }


    return (
        <CartContext.Provider value={{ cartItems, addToCart, deleteCarts }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);