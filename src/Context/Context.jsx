import { Children, createContext, useState } from "react";

export const newContext = createContext();

export const FilterFunction = ({ children }) => {

    const [category, setCategory] = useState("All"); // Category Filter
    const [count, setCount] = useState(0); // Count Items
    const [cartItem, setCartItem] = useState([]); // Cart Products

    return (
        <newContext.Provider value={{ category, setCategory, count, setCount, cartItem, setCartItem }}>
            {children}
        </newContext.Provider>
    )
}