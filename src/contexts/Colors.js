import React, { createContext } from 'react';

export const ColorContext = createContext();

const Colors = props => {
  const colors = {
    'hlColor': '#efc050',
    'bgColor': '#2f3435',
    'hlBorder': '1px solid #efc050',
  }

  return (
    <ColorContext.Provider value={colors}>
      {props.children}
    </ColorContext.Provider>
  );
};

export default Colors;