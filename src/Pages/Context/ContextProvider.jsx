/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { AppContext } from "./AppContext";
import { useState } from "react";
export const ContextProvider = ({ children }) => {
  const [id, setid] = useState([]);
  const [navitem, setnavitem] = useState(0);
  const [mobilenav, setmobilenav] = useState(false);

  const handleNavitems = (i) => {
    setnavitem(i);
  };
  const value = { id, setid, handleNavitems, mobilenav, setmobilenav };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
