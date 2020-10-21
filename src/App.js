import React from 'react';
import 'assets/css/_common.scss';
import Works from './components/Works';
import Header from 'components/common/Header';
import Aside from 'components/common/Aside';

function App() {
  const stopAnchor = e => {
    e.preventDefault();
  };
  return (
    <>
      <Header stopAnchor={stopAnchor} />
      <Works stopAnchor={stopAnchor} />
      <Aside />
    </>
  );
}

export default App;