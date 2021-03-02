import { useState } from 'react';

const useChoosePath = (initialState) => {
  const [state, setState] = useState(initialState);

  const toggleState = (route) => {
    setState((prevState) => {
      const newState = { ...prevState };
      for (const key in newState) {
        newState[key] = false;
      }
      newState[route] = true;
      return newState;
    });
  };
  return [state, toggleState];
};

export default useChoosePath;
