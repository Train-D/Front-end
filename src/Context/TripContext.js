import React, { createContext, useState } from 'react';

export const Context = createContext();

export const AllContextProvider = ({ children }) => {
  const [token, setToken] = useState(null)
  const [selectedTripId, setSelectedTripId] = useState(null);
  const [date, setDate] = useState(null);
  const [creditCardData, setCreditCardData] = useState(null);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [firstName , setFirstName] = useState(null);
  const [lastName , setLastName] = useState(null);
  const [userName , setuserName] = useState(null);
  const [email , setEmail] = useState(null);
  
  return (
    <Context.Provider value={{token, firstName , setFirstName,lastName , setLastName,userName , setuserName,email , setEmail, setToken, selectedTripId, date, setSelectedTripId, setDate, creditCardData, setCreditCardData, selectedSeat, setSelectedSeat }}>
      {children}
    </Context.Provider>
  );
};

// export const CreditDataContext = createContext();

