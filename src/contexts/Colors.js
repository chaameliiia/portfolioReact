import React, { createContext } from 'react';

export const Color = createContext();

const Colors = props => {
  const colors = {
    theme: '#345389',
    background: '#efece3',
  };

  return <Color.Provider value={colors}>{props.children}</Color.Provider>;
};

export default Colors;
