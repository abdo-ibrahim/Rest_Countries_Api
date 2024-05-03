import { createContext, useState } from "react";
const DarkContext = createContext();
const DarkProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  return (
    <DarkContext.Provider value={{ dark, setDark }}>
      {children}
    </DarkContext.Provider>
  );
};

export { DarkProvider, DarkContext };
