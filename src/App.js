import React from 'react';
import 'assets/css/_common.scss';
import Works from './components/Works';
import About from './components/About';
import Header from 'components/common/Header';
import Aside from 'components/common/Aside';
import Colors from 'contexts/Colors';
import Footer from 'components/common/Footer';

function App() {
  const stopAnchor = e => {
    e.preventDefault();
  };
  return (
    <Colors>
      <Header stopAnchor={stopAnchor} />
      <Works stopAnchor={stopAnchor} />
      <About />
      <Aside />
      <Footer />
    </Colors>
  );
}

export default App;