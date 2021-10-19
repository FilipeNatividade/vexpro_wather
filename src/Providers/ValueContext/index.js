import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router";

const ValueContext = createContext();

export const ValueProvider = ({ children }) => {
  const [user, setUser] = useState({});
  console.log('context', user)

  const actionLoginData = async (userApi) => {
    let newUser = await {
      name: userApi.displayName,
      avatar: userApi.photoURL,
    };
    await setUser(newUser);
    console.log('action', user)
  };

  return (
    <ValueContext.Provider
      value={{
        user,
        setUser,
        actionLoginData,
      }}
    >
      {children}
    </ValueContext.Provider>
  );
};
export const useValues = () => useContext(ValueContext);
