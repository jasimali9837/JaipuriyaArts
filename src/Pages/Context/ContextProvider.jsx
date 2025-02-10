/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { AppContext } from "./AppContext";
import { useState } from "react";
export const ContextProvider = ({ children }) => {
  const [id, setid] = useState(null);
  console.log(
    "This is The id Of My current item Which I am Saved in My cart ",
    id
  );

  const value = { id, setid };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
