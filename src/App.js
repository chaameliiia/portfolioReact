import React from 'react';
import 'assets/css/_common.scss';
import Works from './components/Works';
import Header from 'components/common/Header';
import Aside from 'components/common/Aside';
import Colors from 'contexts/Colors';

function App() {
  const stopAnchor = e => {
    e.preventDefault();
  };
  return (
    <Colors>
      <Header stopAnchor={stopAnchor} />
      <Works stopAnchor={stopAnchor} />
      <Aside />
    </Colors>
  );
}

export default App;