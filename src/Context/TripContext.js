import React, { createContext, useState } from 'react';

export const Context = createContext();

export const AllContextProvider = ({ children }) => {
  const [token, setToken] = useState(null)
  const [selectedTripId, setSelectedTripId] = useState(null);
  const [date, setDate] = useState(null);
  const [creditCardData, setCreditCardData] = useState(null);
  const [selectedSeat, setSelectedSeat] = useState(null);

  return (
    <Context.Provider value={{token, setToken, selectedTripId, date, setSelectedTripId, setDate, creditCardData, setCreditCardData, selectedSeat, setSelectedSeat }}>
      {children}
    </Context.Provider>
  );
};

// export const CreditDataContext = createContext();

