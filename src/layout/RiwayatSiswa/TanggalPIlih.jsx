import React, { createContext, useState } from 'react';

export const TanggalContext = createContext();

export const TanggalProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <TanggalContext.Provider value={{ selectedDate, setSelectedDate }}>
      {children}
    </TanggalContext.Provider>
  );
};
