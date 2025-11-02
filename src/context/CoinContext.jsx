import { createContext } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {

    const contextValue = {

    }

    return (
        <CoinContext.Provider value={CoinContext}>
            {props.children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider;