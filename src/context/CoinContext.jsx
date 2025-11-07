import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  //We will be getting data in array from api
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  const fetchAllCoin = async () => {
    const url =
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&price_change_percentage=1h`;
    const options = {
      method: "GET",
      headers: { "x-cg-pro-api-key": process.env.API_KEY},
      body: undefined,
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setAllCoin(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(()=> {
    fetchAllCoin();
  }, [currency])

  const contextValue = {
    allCoin, currency, setCurrency
  };

  return (
    <CoinContext.Provider value={CoinContext}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
