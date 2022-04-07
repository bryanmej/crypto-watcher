import React, { useContext, useState } from "react";
import { createContext } from "react";

const Crypto = createContext()

const AppContext = ({children}) => {
    const [currency, setCurrency] = useState("USD")

    return (
        <Crypto.Provider value={{currency, setCurrency}}>
            {children}
        </Crypto.Provider>
    )
}

export default AppContext

export const CryptoState = () => {
    return useContext(Crypto)
}