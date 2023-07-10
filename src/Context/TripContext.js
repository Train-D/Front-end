import React, { createContext, useState } from 'react';

export const Context = createContext();

export const AllContextProvider = ({ children }) => {
  
  const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
  const [token, setToken] = useState(null)
  const [selectedTripId, setSelectedTripId] = useState(null);
  const [date, setDate] = useState(null);
  const [creditCardData, setCreditCardData] = useState(null);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [buttonPopup, setButtonPopup] = useState([false, ""]);
  const [massagePopup, setMassagePopup] = useState(false)

  return (
    <Context.Provider 
    value={{successMessage, setSuccessMessage, errorMessage, setErrorMessage,buttonPopup, setButtonPopup, massagePopup, setMassagePopup,token, setToken, selectedTripId, date, setSelectedTripId, setDate, creditCardData, setCreditCardData, selectedSeat, setSelectedSeat }}>
      {children}
    </Context.Provider>
  );
};

// export const CreditDataContext = createContext();

