import { Children, createContext, useState } from "react";

export const newContext = createContext();

export const FilterFunction = ({ children }) => {

    const [category, setCategory] = useState("All"); // Category Filter
    const [cart, setCart] = useState(false); // Cart Items
    const [count, setCount] = useState(0); // Count Items
    const [cartItem, setCartItem] = useState([]); // Cart Products

    return (
        <newContext.Provider value={{ category, setCategory, cart, setCart, count, setCount, cartItem, setCartItem }}>
            {children}
        </newContext.Provider>
    )
}