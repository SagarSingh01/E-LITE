import { Children, createContext, useEffect, useState } from "react";

export const newContext = createContext();

export const FilterFunction = ({ children }) => {

    // Category Filter
    const [category, setCategory] = useState("All");

    // Count Products
    const [count, setCount] = useState(0);


    return (
        <newContext.Provider value={{ category, setCategory, count, setCount }}>
            {children}
        </newContext.Provider>
    )
}