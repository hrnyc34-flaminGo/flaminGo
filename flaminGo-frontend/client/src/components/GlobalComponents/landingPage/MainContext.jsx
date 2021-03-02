import React, { useState, createContext } from 'react';

export const MainContext = createContext();

export const MainProvider = ({ children, authUser }) => {
  const [user] = useState({
    position: authUser['http://127.0.0.1:3000/user_metadata'].position, // Sting
    fullMeta: authUser['http://127.0.0.1:3000/user_metadata'], //Object
    id: authUser.sub, // Sting userId
    name: authUser.name
  });

  return <MainContext.Provider value={user}>{children}</MainContext.Provider>;
};
