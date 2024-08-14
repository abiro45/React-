import React, { createContext, useState } from 'react';

export const ComplaintsContext = createContext();

export const ComplaintsProvider = ({ children }) => {
  const [complaintsCount, setComplaintsCount] = useState(0);

  const incrementComplaints = () => {
    setComplaintsCount(prevCount => prevCount + 1);
  };

  return (
    <ComplaintsContext.Provider value={{ complaintsCount, incrementComplaints }}>
      {children}
    </ComplaintsContext.Provider>
  );
};
